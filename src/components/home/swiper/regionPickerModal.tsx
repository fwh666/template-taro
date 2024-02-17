import { Picker, View } from '@tarojs/components'
import { } from '@tarojs/taro'
import { useState } from 'react'
import { AtButton } from 'taro-ui'
import { useSharedState } from './MyContext'

const RegionPickerModal = () => {
  const [region, setRegion] = useState(['北京市', '北京市', '东城区'])
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const { setSharedState } = useSharedState()

  const handleRegionChange = (e) => {
    setRegion(e.detail.value)
    console.log(e.detail.value)
     // 修改共享状态的值
     setSharedState((prevState) => ({
      ...prevState,
      hometown: e.detail.value,
    }))
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
