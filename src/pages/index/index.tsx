import AvaImage from '@/components/home/swiper/avaImage'
import BirthdayPage from '@/components/home/swiper/birthday'
import Educiton from '@/components/home/swiper/education'
import Gender from '@/components/home/swiper/gender'
import Location from '@/components/home/swiper/location'
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
      <AvaImage />
      <Location />
      <Gender />
      <Educiton />
      <BirthdayPage />
      {/* <MySwiper /> */}
      {/* <LoginPage/> */}
      {/* <HomeRegistry /> */}
      {/* <PrivacyPolicy /> */}
    </View>
  )
}
