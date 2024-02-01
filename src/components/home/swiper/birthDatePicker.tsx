// BirthDatePicker.tsx

import { Picker } from '@tarojs/components'
import React, { useState } from 'react'
import { AtList, AtListItem } from 'taro-ui'
import './BirthDatePicker.css'

interface BirthDatePickerProps {
  onChange: (value: string) => void
}

const BirthDatePicker: React.FC<BirthDatePickerProps> = ({ onChange }) => {
  const years = Array.from(Array(100), (_, i) => String(new Date().getFullYear() - i))
  const months = Array.from(Array(12), (_, i) => String(i + 1).padStart(2, '0'))
  const days = Array.from(Array(31), (_, i) => String(i + 1).padStart(2, '0'))

  const [year, setYear] = useState<string>(years[0])
  const [month, setMonth] = useState<string>(months[0])
  const [day, setDay] = useState<string>(days[0])

  const handleYearChange = (value: string) => {
    setYear(value)
    onChange(`${value}-${month}-${day}`)
  }

  const handleMonthChange = (value: string) => {
    setMonth(value)
    onChange(`${year}-${value}-${day}`)
  }

  const handleDayChange = (value: string) => {
    setDay(value)
    onChange(`${year}-${month}-${value}`)
  }

  return (
    <AtList className="flex flex-row justify-center items-center h-full font-bold text-lg" hasBorder={false}>
      <Picker mode="selector" range={years} onChange={(e) => handleYearChange(years[e.detail.value])}>
        <AtListItem className="text-lg mb-4 h-20" title="年份" extraText={year} isSwitch />
      </Picker>
      <Picker mode="selector" range={months} onChange={(e) => handleMonthChange(months[e.detail.value])}>
        <AtListItem className="text-lg mb-4 h-20" title="月份" extraText={month} isSwitch />
      </Picker>
      <Picker mode="selector" range={days} onChange={(e) => handleDayChange(days[e.detail.value])}>
        <AtListItem className="text-lg mb-4 h-20" title="日子" extraText={day} isSwitch />
      </Picker>
    </AtList>
  )
}

export default BirthDatePicker
