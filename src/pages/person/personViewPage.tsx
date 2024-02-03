import routes from '@/routeConfig'
import Taro from '@tarojs/taro'
import React from 'react'

const PersonViewPage: React.FC = () => {
  const toPersonViewDetail = () => {
    Taro.navigateTo({
      url: `/${routes.personViewDetailPage}`
    })
  }
  return (
    <div>
      <div className="h-screen w-screen bg-gradient-to-b from-gray-light via-gray-lighter to-gray-lighter">
        <div className="text-center p-4 border-b">
          <div className="mt-2">
            <img alt="Profile picture placeholder" className="w-24 h-24 rounded-full mx-auto" height="96" width="96"/>
            <h1 className="text-xl font-semibold mt-2">
              Marvin
              <i className="fas fa-crown text-yellow-400"></i>
            </h1>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm mt-2" onClick={toPersonViewDetail}>
              关注/编辑
            </button>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-600">我想认识</p>
                <p className="text-lg font-semibold">5</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">心动</p>
                <p className="text-lg font-semibold">116</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">关注</p>
                <p className="text-lg font-semibold">67</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">访客</p>
                <p className="text-lg font-semibold relative">
                  3667
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">72</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-blue-800 text-white text-center p-4 mt-2">
          <p>开通大会员</p>
          <p className="text-sm mt-1">15大专属福利 畅你所想成全</p>
          <button className="bg-yellow-400 text-blue-800 px-4 py-1 rounded-full text-sm mt-2">立即开通</button>
        </div> */}

        <div className="container mx-auto my-10 grid grid-cols-2 gap-4 ">
          <div className="bg-blue-500 p-4 rounded-lg text-white">
            <h3 className="text-xl font-medium">我的钻石</h3>
            <p>20</p>
          </div>
          <div className="bg-red-500 p-4 rounded-lg text-white">
            <h3 className="text-xl font-medium">我的动态</h3>
            <p>4</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="text-lg font-semibold mb-4">个人中心</div>
          <div
            className="flex flex-row space-x-4 items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">我的认证</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">三分钟答</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">匹配设置</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="text-lg font-semibold mb-4">加速脱单</div>
          <div
            className="flex flex-row space-x-4 items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">拯救单身</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">VIP</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <div className="text-lg font-semibold mb-4">其他功能</div>
          <div
            className="flex flex-row space-x-4 items-center justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-md">
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">处罚规则</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">隐私设置</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">客服</p>
            </div>
            <div className="w-full max-w-sm px-4 py-2">
              <p className="text-sm mt-1">安全说明</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PersonViewPage
