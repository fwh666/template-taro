import { View } from '@tarojs/components'
import React from 'react'
import BirthDatePicker from './birthDatePicker'

const BirthdayPage: React.FC = () => {
  const handleYearChange = (selectedYear: string) => {
    console.log(`Selected year: ${selectedYear}`)
  }
  return (
    <div>
      <div className="px-4 py-2">
        <div className="text-center mt-8">
          <div className="inline-block w-16 h-16 bg-gray-200 rounded-full"></div>
          <h1 className="text-2xl font-medium mt-4">你是哪一年出生</h1>
          <View>
            <BirthDatePicker onChange={handleYearChange} />
          </View>
        </div>
      </div>
    </div>
  )
}

export default BirthdayPage
