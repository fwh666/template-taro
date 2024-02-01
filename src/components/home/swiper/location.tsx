import React from 'react'

const Location: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10">
            <i className="fas fa-search text-gray-400 text-3xl"></i>
          </div>
          <div className="text-2xl mb-10">你现在属于在使用里</div>
          <div className="flex items-center justify-center mb-20">
            <input
              type="text"
              placeholder="选搜索城市"
              className="border rounded-full py-2 px-4 text-sm placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-200 text-blue-600 text-sm rounded-full py-2 px-4 ml-2">获取定位</button>
          </div>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
