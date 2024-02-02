import PersonBase from '@/components/myself/personBase'
import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className="index">
      {/* <Text>Hello world!</Text> */}
      {/* <AvaImage />
      <Location />
      
      <Educiton />
      <BirthdayPage /> */}
      {/* <MySwiper /> */}
      <PersonBase />
      {/* <PersonBaseInfo />
      <PersonBaseAva /> */}

      {/* <Gender /> */}
      {/* <LoginPage/> */}
      {/* <HomeRegistry /> */}
      {/* <PrivacyPolicy /> */}
    </View>
  )
}
