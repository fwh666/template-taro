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
      <div className="pt-6 px-4">
        <div className="text-center mt-8 mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">完善资料和认证</h1>
          <p className="text-gray-500 mt-2 text-font-kai font-sm">营造靠谱交友环境</p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-8">
          <div className="h-max rounded-lg bg-gray-200">
            <div>
              <div className="text-sm text-gray-800">基本资料</div>
              <div className="text-xs text-gray-500">快速了解，提高匹配效率</div>
            </div>
          </div>
          <div className="h-32 rounded-lg bg-gray-200">
            <div>
              <div className="text-sm text-gray-800">头像照片</div>
              <div className="text-xs text-gray-500">真实大好，获得有效曝光</div>
            </div>
          </div>
          <div className="h-32 rounded-lg bg-gray-200">
            <div>
              <div className="text-sm text-gray-800">三重认证(0/3)</div>
              <div className="text-xs text-gray-500">这一步我们已累计拦截60%以上的用户</div>
            </div>
          </div>
        </div>

        {/*<div className="bg-white rounded-lg shadow p-4 mb-4">*/}
        {/*  <div className="flex items-center mb-4 w-1/3">*/}
        {/*    <i className="fas fa-bars text-gray-500 mr-2"></i>*/}
        {/*    <div>*/}
        {/*      <div className="text-sm text-gray-800">基本资料</div>*/}
        {/*      <div className="text-xs text-gray-500">快速了解，提高匹配效率</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="flex items-center mb-4">*/}
        {/*    <i className="far fa-smile text-gray-500 mr-2"></i>*/}
        {/*    <div>*/}
        {/*      <div className="text-sm text-gray-800">头像照片</div>*/}
        {/*      <div className="text-xs text-gray-500">真实大好，获得有效曝光</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="flex items-center">*/}
        {/*    <i className="fas fa-check-circle text-gray-500 mr-2"></i>*/}
        {/*    <div>*/}
        {/*      <div className="text-sm text-gray-800">三重认证(0/3)</div>*/}
        {/*      <div className="text-xs text-gray-500">这一步我们已累计拦截60%以上的用户</div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="text-center">
          <button className="bg-blue-500 border-2 text-white rounded py-2 px-8" onClick={toBaseInfo}>
            完善资料
          </button>
          <button
            className="inline-block border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
          >
            Create Order
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

export default PersonBasePage
