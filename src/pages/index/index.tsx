import {View} from '@tarojs/components'
import Taro, {useLoad, useRouter} from '@tarojs/taro'
import {useState} from 'react'

import CommendIndex from '../commend/commendIndex'
import LoginPage from '../login/loginPage'
import './index.scss'
import PageCheckbox from "@/pages/test/test"

export default function Index() {
  useLoad(() => {
    isLoggedCheck()
    console.log('Page loaded.')
  })

  const [isLogged, setIsLogged] = useState<boolean>(true)

  // 校验登录状态信息
  const isLoggedCheck = () => {
    const loginCode = Taro.getStorageSync('loginCode')
    console.log(loginCode)
    if (loginCode) {
      console.log('isLogged')
      setIsLogged(true)
    } else {
      console.log('notLogged')
      setIsLogged(false)
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
      {isLogged ? <CommendIndex/> : <LoginPage isAgreed={isAgree}/>}
      {/*{isLogged ? <CommendIndex/> : <PageCheckbox/>}*/}
      {/* {isLogined ? <PersonAva /> : <LoginPage isAgreed={isAgree} />} */}
      {/* {isLogined ? <UserInfo /> : <LoginPage isAgreed={isAgree} />} */}
    </View>
  )
}
