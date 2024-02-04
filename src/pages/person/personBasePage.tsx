import routes from '@/routeConfig'
import Taro from '@tarojs/taro'
import React from 'react'
import {AtList, AtListItem} from 'taro-ui'

const PersonBasePage: React.FC = () => {
  const toBaseInfo = () => {
    Taro.navigateTo({
      url: `/${routes.personInfo}`
    })
  }

  return (
    <div>
      <div className="h-screen pt-6 px-4">
        <div className="text-center mt-8 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">完善资料和认证</h1>
          <p className="text-gray-500 mt-2 text-font-kai font-sm">营造靠谱交友环境</p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mx-8">
          <div className="h-20 rounded-lg bg-white">
            <div>
              <div className="text-sm text-gray-800">基本资料</div>
              <div className="text-xs text-gray-500">快速了解，提高匹配效率</div>
            </div>
          </div>
          <div className="h-20 rounded-lg bg-white">
            <div>
              <div className="text-sm text-gray-800">头像照片</div>
              <div className="text-xs text-gray-500">真实大好，获得有效曝光</div>
            </div>
          </div>
          <div className="h-20 rounded-lg bg-white">
            <div>
              <div className="text-sm text-gray-800">三重认证(0/3)</div>
              <div className="text-xs text-gray-500">这一步我们已累计拦截60%以上的用户</div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-4 mx-auto h-50">
          <button
            className="inline-block bg-blue-600 text-white w-1/2 flex justify-center py-3 rounded-lg font-semibold border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700 focus:relative"
            onClick={toBaseInfo}
          >
            继续完善
          </button>
        </div>
        <div className="text-center mt-8 text-sm text-gray-600 align-bottom">
          <div>UID: 24012320790</div>
          <div className="mt-2">帮助&客服</div>
        </div>
      </div>
    </div>
  )
}

export default PersonBasePage
