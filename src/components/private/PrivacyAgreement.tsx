// PrivacyAgreement.tsx
import { Button, View } from '@tarojs/components'
import React, { useState } from 'react'
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from 'taro-ui'

interface ChildComponentProps {
  sendDataToParent: (data: boolean) => void
}

const PrivacyAgreement: React.FC<ChildComponentProps> = ({ sendDataToParent }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [isAgree, setIsAgree] = useState<boolean>(false)

  const handleShowModal = () => {
    setIsOpened(true)
  }

  const handleConfirm = () => {
    // setIsOpened(false)
    console.log('点击了同意')
    setIsAgree(true)
    sendDataToParent(true)
    // 用户同意隐私协议后的处理逻辑，可以在这里调用后端接口，进行相关操作
  }

  const handleCancel = () => {
    setIsOpened(false)
    console.log('点击了取消')
    // 用户拒绝隐私协议后的处理逻辑
  }

  return (
    <View className="privacy-agreement">
      <Button onClick={handleShowModal}>阅读隐私协议</Button>
      <AtModal isOpened={isOpened} closeOnClickOverlay={false}>
        <AtModalHeader>隐私协议</AtModalHeader>
        <AtModalContent>
          {/* 这里放置隐私协议内容 */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec erat sed odio sodales tristique.
          {/* 示例内容结束 */}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handleConfirm}>同意</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}

export default PrivacyAgreement
