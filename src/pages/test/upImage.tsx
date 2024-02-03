import { Button, Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'

const UserInfo = () => {
  const [avatar, setAvatar] = useState('')

  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
    })
    .then(res => {
      const path = res.tempFilePaths[0]
      // 这里的 path 可以用于图片预览或者上传
      setAvatar(path);

      // 模拟图片上传到服务器
      Taro.uploadFile({
        url: 'http://127.0.0.1:8080/xd/wx/uploadImage', // 你的上传接口地址
        filePath: path,
        name: 'file',
      })
      .then(res => {
        if (res.statusCode == 200) {
          Taro.showToast({ title: '上传成功', icon: 'success' })
          console.log(res.data);
        } else {
          Taro.showToast({ title: '上传失败', icon: 'none' })
        }
      })
    })
  }
  
  return (
    <View className='profile'>
      <Button onClick={handleChooseImage}>Upload</Button>
      {avatar && <Image className='avatar' src={avatar} />}
    </View>
  )
}

export default UserInfo;