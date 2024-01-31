import { Swiper, SwiperItem, View } from '@tarojs/components';
import React from 'react';

const MySwiper: React.FC = () => {
  return (
    <Swiper
      className='swiper'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      circular
      indicatorDots
      autoplay
    >
      <SwiperItem>
        <View className='swiper-item'>1</View>
      </SwiperItem>
      <SwiperItem>
        <View className='swiper-item'>2</View>
      </SwiperItem>
      <SwiperItem>
        <View className='swiper-item'>3</View>
      </SwiperItem>
    </Swiper>
  );
}

export default MySwiper;