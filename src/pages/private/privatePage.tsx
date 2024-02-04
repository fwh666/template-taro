import PrivacyAgreement from '@/components/private/PrivacyAgreement'
import React from 'react'

const PrivatePage: React.FC = () => {
  const handleDataFromChild = (data: boolean) => {
    // 在这里处理从子组件传递过来的数据
    console.log('同意了吗？', data)
    //按钮勾选隐私
    // if (data) {
    //   Taro.switchTab({
    //     url: `/${routes.homeIndex}`
    //   })
    // } else {
    //   console.log('no agree privacy')
    // }
  }
  return (
    <div>
      <PrivacyAgreement sendDataToParent={handleDataFromChild} />
    </div>
  )
}

export default PrivatePage
