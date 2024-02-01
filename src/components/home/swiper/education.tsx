import React from 'react'

const Educiton: React.FC = () => {
  return (
    <div>
      <div className="px-4 py-2">

        <div className="flex justify-between items-center mt-6">
          <i className="fas fa-chevron-left text-gray-600"></i>
          <i className="fas fa-graduation-cap text-gray-600"></i>
          <i className="fas fa-ellipsis-h text-gray-600"></i>
        </div>

        <div className="text-center mt-6">
          <h1 className="text-2xl font-semibold">你的学历是</h1>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <input type="text" placeholder="博士" className="w-full text-center bg-transparent focus:outline-none" />
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <input type="text" placeholder="硕士" className="w-full text-center bg-transparent focus:outline-none" />
          </div>
          <div className="bg-white rounded-lg p-4 shadow">
            <input type="text" placeholder="本科" className="w-full text-center bg-transparent focus:outline-none" />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="rounded-full bg-blue-500 p-4 text-white">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Educiton
