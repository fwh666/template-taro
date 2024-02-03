import { View } from '@tarojs/components'
import Taro, { useLoad, useRouter } from '@tarojs/taro'
import { useState } from 'react'

import CommendIndex from '../commend/commendIndex'
import LoginPage from '../login/loginPage'
import './index.scss'

export default function Index() {
  useLoad(() => {
    isLoginedCheck()
    console.log('Page loaded.')
  })

  const [isLogined, setIsLogined] = useState<boolean>(false)

  const isLoginedCheck = () => {
    const loginCode = Taro.getStorageSync('loginCode')
    console.log(loginCode)
    if (loginCode) {
      console.log('isLogined')
      setIsLogined(true)
    } else {
      console.log('notLogined')
      setIsLogined(false)
    }
  }

  const router = useRouter()
  const isAgree: any = router.params.isAgree

  return (
    <View className="index">
      {/* <LoginPage isAgreed={isAgree}/> */}
      {/* <PersonBasePage/> */}
      {/* <CommendIndex /> */}
      {/* {isLogined ? <PersonBasePage /> : <LoginPage isAgreed={isAgree} />} */}
      {/* {isLogined ? <UserAttributesPicker /> : <LoginPage isAgreed={isAgree} />} */}
      {isLogined ? <CommendIndex /> : <LoginPage isAgreed={isAgree} />}
      {/* {isLogined ? <PersonAva /> : <LoginPage isAgreed={isAgree} />} */}
      {/* {isLogined ? <UserInfo /> : <LoginPage isAgreed={isAgree} />} */}
    </View>
  )
}
