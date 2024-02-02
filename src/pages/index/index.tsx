import { View } from '@tarojs/components'
import { useLoad, useRouter } from '@tarojs/taro'
import LoginPage from '../login/loginPage'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  const router = useRouter()
  const isAgree: any = router.params.isAgree
  // console.log(isAgree)
  // const parentData = 'Hello from parent';

  //   const a: any = getCurrentInstance().router.params.id;

  return (
    <View className="index">
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
      <LoginPage isAgreed={isAgree} />
      {/* <PrivacyPolicy /> */}
    </View>
  )
}
