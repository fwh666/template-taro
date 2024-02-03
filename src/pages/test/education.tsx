import { Picker, View } from '@tarojs/components'
import { } from '@tarojs/taro'
import { useState } from 'react'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'

const DatePicker = () => {
  const [date, setDate] = useState('2019-01-01')
  const [education, setEducation] = useState('')
  const [isOpenedDatepicker, setIsOpenedDatepicker] = useState(false)
  const [isOpenedEducation, setIsOpenedEducation] = useState(false)

  const educations = ['小学', '初中', '高中', '本科', '硕士', '博士']

  const handleDateChange = (e) => {
    setDate(e.detail.value)
    setIsOpenedDatepicker(false)
  }

  const handleEducationChange = (e) => {
    setEducation(educations[e.detail.value])
    setIsOpenedEducation(false)
  }

  const openDatepicker = () => {
    setIsOpenedDatepicker(true)
  }

  const openEducation = () => {
    setIsOpenedEducation(true)
  }

  return (
    <View className='container'>
      <View onClick={openDatepicker}>选择生日</View>

      <AtActionSheet isOpened={isOpenedDatepicker} onClose={() => setIsOpenedDatepicker(false)}>
        <AtActionSheetItem>
          <Picker mode='date' value={date} onChange={handleDateChange}>
            <View className='picker'>
              当前选择：{date}
            </View>
          </Picker>
        </AtActionSheetItem>
      </AtActionSheet>

      <View onClick={openEducation}>选择学历</View>

      <AtActionSheet isOpened={isOpenedEducation} onClose={() => setIsOpenedEducation(false)}>
        <AtActionSheetItem>
          <Picker mode='selector' range={educations} onChange={handleEducationChange}>
            <View className='picker'>
              当前选择：{education || '未选择'}
            </View>
          </Picker>
        </AtActionSheetItem>
      </AtActionSheet>
    </View>
  )
}

export default DatePicker