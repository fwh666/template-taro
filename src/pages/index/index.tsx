import PersonBaseInfo from '@/components/myself/personBaseInfo'
import { View } from '@tarojs/components'
import Taro, { useLoad, useRouter } from '@tarojs/taro'
import { useState } from 'react'
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
  // console.log(isAgree)
  // const parentData = 'Hello from parent';

  //   const a: any = getCurrentInstance().router.params.id;

  return (
    <View className="index">
      {/* {isLogined ? <PersonBase /> : <LoginPage isAgreed={isAgree} />} */}
      {isLogined ? <PersonBaseInfo /> : <LoginPage isAgreed={isAgree} />}
      {/* {isLogined ? <InputPopup /> : <LoginPage isAgreed={isAgree} />} */}

      {/* <Text>Hello world!</Text> */}
      {/* <AvaImage />
      <Location />
      
      <Educiton />
      <BirthdayPage /> */}
      {/* <MySwiper /> */}
      {/* <PersonBase /> */}
      {/* <PersonBaseInfo />
      <PersonBaseAva /> */}

      {/* <Gender /> */}
      {/* <LoginPage/> */}
      {/* <HomeRegistry /> */}
      {/* <PersonBase /> */}
      {/* <LoginPage isAgreed={isAgree} /> */}
      {/* <PrivacyPolicy /> */}
    </View>
  )
}
