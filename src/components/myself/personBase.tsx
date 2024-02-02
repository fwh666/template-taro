import Taro from '@tarojs/taro'
import React from 'react'
const PersonBase: React.FC = () => {
  const toBaseInfo = () => {
    Taro.navigateTo({
      url: '/pages/myself/personBaseInfoPage'
    })
  }

  return (
    <div>
      <div className="pt-6 px-4">
        <div className="text-center mt-8 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">完善资料和认证</h1>
          <p className="text-gray-600 mt-2">提供不完善、资料假借的用户，管理员有权随时关闭其帐户</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex items-center mb-4">
            <i className="fas fa-bars text-gray-500 mr-2"></i>
            <div>
              <div className="text-sm text-gray-800">基本资料</div>
              <div className="text-xs text-gray-500">快速了解，提高匹配效率</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <i className="far fa-smile text-gray-500 mr-2"></i>
            <div>
              <div className="text-sm text-gray-800">头像照片</div>
              <div className="text-xs text-gray-500">真实大好，获得有效曝光</div>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-check-circle text-gray-500 mr-2"></i>
            <div>
              <div className="text-sm text-gray-800">三重认证(0/3)</div>
              <div className="text-xs text-gray-500">这一步我们已累计拦截60%以上的用户</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-blue-500 text-white rounded py-2 px-8" onClick={toBaseInfo}>
            完善资料
          </button>
        </div>
        <div className="text-center mt-8 text-sm text-gray-600">
          <div>UID: 24012320790</div>
          <div className="mt-2">帮助&客服</div>
        </div>
        <div className="flex justify-around items-center mt-4 text-gray-500">
          <i className="fas fa-comment"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
          <i className="fas fa-eye"></i>
          <i className="fas fa-cat"></i>
        </div>
      </div>
    </div>
  )
}

export default PersonBase
