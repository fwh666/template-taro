import { Picker, View } from '@tarojs/components'
import { useState } from 'react'
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'

const ExampleComponent = () => {
  const [date, setDate] = useState('2019-01-01')
  const [isOpened, setIsOpened] = useState(false)

  const handleDateChange = (e) => {
    setDate(e.detail.value)
  }

  const openActionSheet = () => {
    setIsOpened(true)
  }

  const closeActionSheet = () => {
    setIsOpened(false)
  }

  return (
    <View className='container'>
      <View onClick={openActionSheet}>选择生日</View>

      <AtActionSheet isOpened={isOpened} onClose={closeActionSheet}>
        <AtActionSheetItem>
          <Picker mode='date' value={date} onChange={handleDateChange}>
            <View className='picker'>
              当前选择：{date}
            </View>
          </Picker>
        </AtActionSheetItem>
      </AtActionSheet>
    </View>
  )
}

export default ExampleComponent