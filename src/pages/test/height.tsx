import { Picker, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import 'taro-ui/dist/style/index.scss'

const ExampleComponent: React.FC = () => {
  const minHeight = 140
  const maxHeight = 220
  const heightOptions = Array.from({ length: maxHeight - minHeight + 1 }, (_, i) => `${i + minHeight}cm`)
  const [selectedHeight, setSelectedHeight] = useState<string>('')

  const handleHeightChange = (e: any) => {
    setSelectedHeight(heightOptions[e.detail.value])
  }

  const handleShowPicker = () => {
    Taro.showActionSheet({
      itemList: heightOptions,
      success: (res) => {
        setSelectedHeight(heightOptions[res.tapIndex])
      }
    })
  }

  return (
    <View>
      <View onClick={handleShowPicker}>
        <Text>点击选择身高</Text>
      </View>
      <Picker mode="selector" range={heightOptions} onChange={handleHeightChange}>
        <View>
          <Text>{selectedHeight || '请选择身高'}</Text>
        </View>
      </Picker>
    </View>
  )
}

export default ExampleComponent
