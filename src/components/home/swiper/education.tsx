import React, { useState } from 'react'
import { useSharedState } from './MyContext'

const Educiton: React.FC = () => {
  const { setSharedState } = useSharedState()
  const [selectedEducation, setSelectedEducation] = useState<string>('')
  const handleClick = (education: string) => {
    setSelectedEducation(education)
    console.log('选择了', education)
    // 修改共享状态的值
    // 修改共享状态的值
    setSharedState((prevState) => ({
      ...prevState,
      education:education
    }))
  }

  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center mt-6">
          <img
            className="inline-block w-16 h-16 bg-gray-200 rounded-full"
            src="../../public/svg/birthday-cake-svgrepo-com.svg"
          />
          <h1 className="text-2xl font-semibold">你的学历是</h1>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '博士' ? 'bg-gray-500 text-white' : ''}`}
              onClick={() => {
                handleClick('博士')
              }}>
              博士
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '硕士' ? 'bg-gray-500 text-white' : ''}`}
              onClick={() => {
                handleClick('硕士')
              }}>
              硕士
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '本科' ? 'bg-gray-500 text-white' : ''}`}
              onClick={() => {
                handleClick('本科')
              }}>
              本科
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '大专' ? 'bg-gray-500 text-white' : ''}`}
              onClick={() => {
                handleClick('大专')
              }}>
              大专
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '高中' ? 'bg-gray-500 text-white' : ''}`}
              onClick={() => {
                handleClick('高中')
              }}>
              高中
            </div>
          </div>
          <div
            className="bg-white rounded-lg p-4 shadow"
            onClick={() => {
              handleClick('初中及以下')
            }}>
            <div
              className={`w-full text-center bg-transparent focus:outline-none
            ${selectedEducation === '初中及以下' ? 'bg-gray-500 text-white' : ''}`}>
              初中及以下
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Educiton
