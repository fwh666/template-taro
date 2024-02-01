import Taro from '@tarojs/taro'
import React, { useState } from 'react'
import RegionPickerModal from './regionPickerModal'
const cityData = require('./city.json')
// import { pcaTextArr } from 'element-china-area-data'
// const cityData = pcaTextArr
const Location: React.FC = () => {

  const [city, setCity] = useState<string>('')

  // useEffect(() => {
  //   // 在组件加载完成后获取用户 IP 地址并定位城市信息
  //   getLocationByIP()
  // }, [])

  // ip定位城市
  const getLocationByIP = async () => {
    try {
      const res = await Taro.request({
        url: 'https://api.ipify.org?format=json'
      })
      const ip = res.data.ip
      console.log('ip', ip)
      const cityInfo = await getCityByIP(ip)
      setCity(cityInfo)
    } catch (error) {
      console.error('getLocationByIP error:', error)
    }
  }
  const getCityByIP = async (ip: string) => {
    try {
      const res = await Taro.request({
        url: `https://restapi.amap.com/v3/ip?ip=${ip}&key=9d872478c6ec7ed2d6f1d3b8487bfba9`
      })
      console.log(res.data.province)
      return res.data.city
    } catch (error) {
      console.error('getCityByIP error:', error)
      return ''
    }
  }
  // 手动选择城市
  const [provinceIndex, setProvinceIndex] = useState<number>(1)
  const [cityIndex, setCityIndex] = useState<number>(1)

  const provinceList = Object.keys(cityData)
  const cityList = provinceList.length > 0 ? cityData[provinceList[provinceIndex]] : []

  const handleProvinceChange = (e: any) => {
    setProvinceIndex(e.detail.value)
    setCityIndex(0)
  }

  const handleCityChange = (e: any) => {
    setCityIndex(e.detail.value)
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <div className="flex justify-center items-center mb-10">
            <img
              className="inline-block w-16 h-16 bg-gray-200 rounded-full"
              src="../../public/svg/birthday-cake-svgrepo-com.svg"></img>
          </div>
          <div className="text-2xl mb-10">你现在居住在哪里</div>
          <div className="flex items-center justify-center mb-20">
            {/* <input
              type="text"
              placeholder="选搜索城市"
              className="border rounded-full py-2 px-4 text-sm placeholder-gray-400 focus:outline-none"
              onClick={handleCityChange}
            /> */}
            <RegionPickerModal />

            <button className="bg-blue-200 text-blue-600 text-sm rounded-full py-2 px-4 ml-2" onClick={getLocationByIP}>
              获取定位
            </button>
          </div>
          <div className="arrow-icon">
            <i className="fas fa-arrow-right text-xl"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
