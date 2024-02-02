import PrivacyAgreement from '@/components/private/PrivacyAgreement'
import Taro from '@tarojs/taro'
import React, { useState } from 'react'

const PrivatePage: React.FC = () => {
  //   const [isOpenedPrivacy, setIsOpenedPrivacy] = useState(false)
  const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false)

  const handleDataFromChild = (data: boolean) => {
    // 在这里处理从子组件传递过来的数据
    console.log('同意了吗？', data)
    //按钮勾选隐私
    if (data) {
      console.log('agree privacy')
      Taro.navigateTo({
        url: '/pages/index/index?isAgree=true'
      })
      // TODO-勾选同意隐私
    } else {
      console.log('no agree privacy')
    }
  }
  return (
    <div>
      <PrivacyAgreement sendDataToParent={handleDataFromChild} />
    </div>
  )
}

export default PrivatePage
