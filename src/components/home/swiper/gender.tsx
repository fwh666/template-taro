import React, { useState } from 'react'
import { useSharedState } from './MyContext'

const Gender: React.FC = () => {
  const { setSharedState } = useSharedState()
  const [selectedGender, setSelectedGender] = useState<string | null>(null)

  const handleClick = (gender: string) => {
    setSelectedGender(gender)
    console.log('选择了', gender)
    // 修改共享状态的值
    setSharedState((prevState) => ({
      ...prevState,
      gender:gender
    }))
  }
  

  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center mt-6">
          <div className="text-gray-600 text-2xl">
            <i className="fas fa-infinity"></i>
          </div>
          <h1 className="text-3xl  font-normal mt-2">请选择你的性别</h1>
          <p className="text-gray-500 mt-2">注册成功后不可更改</p>
        </div>

        <div className="mt-6 space-y-4">
          <div
            className={`w-100 h-100 bg-gray-300 flex justify-center items-center cursor-pointer 
            ${selectedGender === 'female' ? 'bg-pink-500 text-white' : ''}`}
            onClick={() => handleClick('female')}>
            <img
              alt="Illustration of a girl"
              className="rounded-full"
              height="100"
              src="https://img0.baidu.com/it/u=3232582821,3516640051&fm=253&fmt=auto&app=138&f=JPEG?w=625&h=500"
              width="100"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium">女生</h2>
              <p className="text-gray-500">Girl</p>
            </div>
          </div>

          <div
            className={`w-100 h-100 bg-gray-300 flex justify-center items-center cursor-pointer 
            ${selectedGender === 'male' ? 'bg-blue-500 text-white' : ''}`}
            onClick={() => handleClick('male')}>
            <img
              alt="Illustration of a boy"
              className="rounded-full"
              height="50"
              src="https://img0.baidu.com/it/u=3232582821,3516640051&fm=253&fmt=auto&app=138&f=JPEG?w=625&h=500"
              width="50"
            />
            <div className="ml-4">
              <h2 className="text-lg font-medium">男生</h2>
              <p className="text-gray-500">Boy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gender
