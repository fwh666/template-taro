import React from 'react'

const AvaImage: React.FC = () => {
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
            <i className="fas fa-plus text-blue-600 text-3xl"></i>
          </div>
        </div>
        <div className="pb-10 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3">
            <i className="fas fa-arrow-right text-white text-2xl"></i>
          </div>
          <span className="text-blue-600">跳过</span>
        </div>
      </div>
    </div>
  )
}

export default AvaImage
