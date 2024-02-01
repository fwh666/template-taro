import { Picker, View } from '@tarojs/components'
import { } from '@tarojs/taro'
import { useState } from 'react'
import { AtButton } from 'taro-ui'

const RegionPickerModal = () => {
  const [region, setRegion] = useState(['浙江省', '杭州市', '西湖区'])
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const handleRegionChange = (e) => {
    setRegion(e.detail.value)
    console.log(e.detail.value)
  }

  const handleModalConfirm = () => {
    setModalVisible(false)
  }

  const handleModalCancel = () => {
    setModalVisible(false)
  }

  return (
    <View>
      <Picker mode="region" onChange={handleRegionChange} value={region}>
        {modalVisible ? (
          <View>{region.join(' ')}</View>
        ) : (
          <AtButton onClick={() => setModalVisible(true)}>点击选择地区</AtButton>
        )}
      </Picker>
    </View>
  )
}

export default RegionPickerModal