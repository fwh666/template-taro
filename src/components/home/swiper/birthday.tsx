// import { Picker } from '@tarojs/taro'
import React, { useState } from 'react'
const BirthdayPage: React.FC = () => {
  const years = ['1992年', '1993年', '1994年', '1995年', '1996年']
  const [selectedYear, setSelectedYear] = useState('1994年')

  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center mt-8">
          <div className="inline-block w-16 h-16 bg-gray-200 rounded-full"></div>
          <h1 className="text-2xl font-medium mt-4">你是哪一年出生</h1>
          <div className="mt-6 space-y-4">
            <div className="relative inline-block w-32 mx-1">
              {/* <Picker mode="selector" range={years} onChange={(e) => setSelectedYear(years[e.detail.value])}>
                <View className="picker">当前选择：{selectedYear}</View>
              </Picker> */}
              <select className="block w-full bg-white border border-blue-600 rounded-lg px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                <option>1992年</option>
                <option>1993年</option>
                <option selected>1994年</option>
                <option>1995年</option>
                <option>1996年</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dropdown"></div>
            </div>

            <div className="relative inline-block w-20 mx-1">
              <select className="block w-full bg-white border border-blue-600 rounded-lg px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>1月</option>
                <option>2月</option>
                <option>3月</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dropdown"></div>
            </div>

            <div className="relative inline-block w-20 mx-1">
              <select className="block w-full bg-white border border-blue-600 rounded-lg px-4 py-2 pr-8 leading-tight focus:outline-none focus:shadow-outline">
                <option selected>1日</option>
                <option>2日</option>
                <option>3日</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dropdown"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BirthdayPage
