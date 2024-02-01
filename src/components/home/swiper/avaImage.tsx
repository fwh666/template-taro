import Taro from '@tarojs/taro'
import React, { useState } from 'react'
import { AtButton } from 'taro-ui'

const AvaImage: React.FC = () => {
  const [avatar, setAvatar] = useState('')
  const chooseAndUploadImage = async () => {
    try {
      const chooseImageRes = await Taro.chooseImage({
        count: 1, // 最多选择一张图片
        sizeType: ['original', 'compressed'], // 可选择原图或压缩图
        sourceType: ['album', 'camera'] // 可选择相册或拍照
      })

      const tempFilePath = chooseImageRes.tempFilePaths[0]
      console.log(tempFilePath)
      const uploadRes = await Taro.uploadFile({
        url: 'https://example.com/upload', // 上传图片的服务器URL
        filePath: tempFilePath, // 选择的图片文件路径
        name: 'file', // 服务器接收图片的字段名
        formData: {
          user: 'test' // 其他表单数据
        }
      })

      const data = uploadRes.data // 上传成功后的返回数据
      console.log(data)
      // 处理上传成功后的逻辑
    } catch (error) {
      // 处理选择或上传图片过程中的错误
    }
  }

  return (
    <div>
      <div className="flex flex-col h-screen justify-between">
        <div className="pt-5">
          <div className="px-4 flex justify-between items-center">
            <div className="text-blue-600">
              <i className="fas fa-arrow-left"></i>
            </div>
            <div className="text-blue-600">
              <i className="fas fa-camera"></i>
            </div>
          </div>
          <div className="text-center mt-10">
            <div className="mx-auto w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <i className="far fa-smile text-3xl text-blue-600"></i>
            </div>
            <h1 className="text-3xl font-medium mt-5">上传一张头像</h1>
          </div>
          <div className="mx-auto mt-10 w-48 h-48 border-2 border-dashed border-blue-600 rounded-lg flex items-center justify-center">
            {/* <i className="fas fa-plus text-blue-600 text-3xl"></i> */}
            <AtButton onClick={chooseAndUploadImage} className="fas fa-plus text-blue-600 text-3xl">
              up
            </AtButton>
          </div>
        </div>
        <div className="pb-10 text-center">
          <span className="text-blue-600">跳过</span>
        </div>
      </div>
    </div>
  )
}

export default AvaImage
