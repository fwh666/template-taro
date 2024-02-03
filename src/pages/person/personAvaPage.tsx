import routes from '@/routeConfig'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useState } from 'react'

const PersonAvaPage: React.FC = () => {
  const [avatar, setAvatar] = useState('')
  const [desc, setDesc] = useState('')

  const toCommend = () => {
    Taro.navigateTo({
      // url: '/pages/commend/commend'
      url: `/${routes.commend}`
    })
  }

  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera']
    }).then((res) => {
      const path = res.tempFilePaths[0]
      // 这里的 path 可以用于图片预览或者上传
      setAvatar(path)

      // 模拟图片上传到服务器
      Taro.uploadFile({
        url: 'http://127.0.0.1:8080/xd/wx/uploadImage', // 你的上传接口地址
        filePath: path,
        name: 'file'
      }).then((res) => {
        if (res.statusCode == 200) {
          Taro.showToast({ title: '上传成功', icon: 'success' })
          console.log(res.data)
        } else {
          Taro.showToast({ title: '上传失败', icon: 'none' })
        }
      })
    })
  }

  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center">
          <div className="text-xl font-medium">个人信息</div>
          <div className="text-sm mt-2">完善三步走可认证他人</div>
          <div className="text-xs mt-1">一劳APP是一个严谨、靠谱的交友平台，请认真填写资料</div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <a href="#" className="bg-blue-600 text-white py-1 px-4 rounded-full text-sm link-effect">
            基本资料
          </a>
          <a href="#" className="bg-purple-300 text-white py-1 px-4 rounded-full text-sm link-effect">
            头像照片
          </a>
          <button className="bg-blue-600 text-white py-1 px-4 rounded-full text-sm">三重认证</button>
        </div>
        {/* TODO: 默认头像-自适应大小 */}
        <div className="border-dashed border-2 border-gray-300 rounded-lg mt-6 py-10 flex justify-center items-center">
          {!avatar && (
            <div className="text-gray-500" onClick={handleChooseImage}>
              添加头像/封面
            </div>
          )}
          {avatar && <Image onClick={handleChooseImage} className="avatar text-gray-500" src={avatar} />}
        </div>

        {/* TODO: 字数校验-下一步置灰提醒 */}
        <div className="mt-6">
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className="w-full p-4 bg-white rounded-lg text-sm border border-gray-300"
            rows={4}
            placeholder="简单描述下自己是怎么样一个人，性格，兴趣，旅游等，不少于20字"></textarea>
          <div className="text-right text-gray-500 text-xs mt-1">0/800</div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-sm"
          onClick={toCommend}
          >下一步</button>
        </div>
      </div>
    </div>
  )
}

export default PersonAvaPage
