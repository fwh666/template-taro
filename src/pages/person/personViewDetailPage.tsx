import routes from '@/routeConfig'
import Taro from '@tarojs/taro'
import React from 'react'

const PersonViewDetailPage: React.FC = () => {
  const toPersonInfoPage = () => {
    console.log('toPersonInfoPage')
    Taro.navigateTo({
      url: `/${routes.personInfo}`
    })
  }
  return (
    <div>
      <div className="max-w-sm mx-auto">
        <div className="relative">
          <img
            alt="A person standing in front of a fence with a street sign reading 'QINYU Rd' in the background"
            className="w-full"
            height="416"
            src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bPxYzl3scJOnAm1gNz87jD4g/user-J1G3ILc1ZIqay44FXSxUp16W/img-CbV1eVihSfMDqgYezpSnc81X.png?st=2024-02-03T10%3A25%3A52Z&amp;se=2024-02-03T12%3A25%3A52Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-02-03T02%3A16%3A32Z&amp;ske=2024-02-04T02%3A16%3A32Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=ff0hjeH/iYApiFrRztf%2BoFxXCgmkoUTgdEYdW5ktXvs%3D"
            width="416"
          />
          <div className="absolute bottom-0 left-0 p-2">
            <button className="bg-blue-500 text-white p-2 rounded-full">
              <i className="fas fa-camera"></i>
            </button>
          </div>
        </div>

        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              Marvin
              <i className="fas fa-medal text-yellow-400"></i>
            </h1>
            <button className="text-orange-400" onClick={toPersonInfoPage}>
              <i className="fas fa-thumbs-up">编辑</i>
            </button>
          </div>
          <div className="text-gray-600 mt-2">
            <p>
              <i className="fas fa-birthday-cake"></i>
              92年 · 居澳澳
            </p>
            <p>
              <i className="fas fa-ruler-vertical"></i>
              178cm · 70kg
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              本科 · 北京邮电大学 (首尔)
            </p>
            <p>
              <i className="fas fa-briefcase"></i>
              程序员 · 北京京通科技公司 (已离职)
            </p>
            <p>
              <i className="fas fa-home"></i>
              现居北京 · 河北沧州人
            </p>
          </div>
        </div>

        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">语音介绍</h2>
          <p className="text-gray-600 mt-2">用户暂时自己已，让大家更立体的了解你</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full">
            <i className="fas fa-microphone"></i>
            录制语音介绍
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonViewDetailPage
