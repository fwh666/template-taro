import { Swiper, SwiperItem, View } from '@tarojs/components'
import React, { useState } from 'react'
import AvaImage from './avaImage'
import BirthdayPage from './birthday'
import Educiton from './education'
import Gender from './gender'
import Location from './location'

const MySwiper: React.FC = () => {
  // 处理reachEnd事件的函数
  const handleReachEnd = () => {
    // 在这里执行滑动到最后时的逻辑操作
    // 例如禁止继续滑动或者执行其他操作
    console.log('滑动到了最后')
  }
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    // 计算下一个选项卡的索引
    const nextIndex = current + 1

    // 滑动到下一个选项卡
    setCurrent(nextIndex)
  }

  const handleSwiperChange = (e) => {
    // 更新当前选项卡的索引
    setCurrent(e.detail.current)
  }

  return (
    <View>
      <Swiper
        current={current}
        onChange={handleSwiperChange}
        className="w-screen h-screen flex items-center justify-center swiper-item"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        circular
        indicatorDots
        disableTouch
        full>
        <SwiperItem>
          <View className="swiper-item flex flex-col items-center w-full">
            <Gender />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">
            <BirthdayPage />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">
            <Educiton />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">
            <Location />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className="swiper-item">
            <AvaImage />
          </View>
        </SwiperItem>
      </Swiper>
      <button onClick={handleNext}>
        <div className="pb-10 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-3">
            <i className="fas fa-arrow-right text-white text-2xl"></i>
            {/* TODO 引用svg图标实现 */}
            {/* <img src="../../../images/icon/home.png"></img> */}
          </div>
        </div>
      </button>
    </View>
  )
}

export default MySwiper
