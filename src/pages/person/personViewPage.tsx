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
      <div className="max-w-sm mx-auto bg-white">
        <div className="text-center p-4 border-b">
          <div className="flex justify-between items-center">
            <i className="fas fa-cog text-gray-600"></i>
            <i className="fas fa-camera text-gray-600"></i>
          </div>
          <div className="mt-2">
            <img
              alt="Profile picture placeholder"
              className="w-24 h-24 rounded-full mx-auto"
              height="96"
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bPxYzl3scJOnAm1gNz87jD4g/user-J1G3ILc1ZIqay44FXSxUp16W/img-WlH2jVdIBWkFLXO8UxwZjVBO.png?st=2024-02-03T09%3A46%3A47Z&amp;se=2024-02-03T11%3A46%3A47Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-02-03T02%3A18%3A20Z&amp;ske=2024-02-04T02%3A18%3A20Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=U7Lpj0TfsJ0NPQSgzc9%2B0DIPMahy5EvtGpJUxTDQRYo%3D"
              width="96"
            />
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

        <div className="p-4 border-b">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600">我的钻石</p>
              <p className="text-lg font-semibold">20</p>
            </div>
            <div>
              <p className="text-gray-600">我的动态</p>
              <p className="text-lg font-semibold">4</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <i className="fas fa-check-circle text-blue-500"></i>
              <p className="text-sm mt-1">我的认证</p>
            </div>
            <div className="text-center">
              <i className="fas fa-comment-dots text-orange-400"></i>
              <p className="text-sm mt-1">三分钟答</p>
            </div>
            <div className="text-center">
              <i className="fas fa-users text-blue-500"></i>
              <p className="text-sm mt-1">匹配设置</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex justify-between">
            <div className="text-center">
              <i className="fas fa-hand-holding-heart text-orange-400"></i>
              <p className="text-sm mt-1">接受任务</p>
            </div>
            <div className="text-center">
              <i className="fas fa-heart text-red-500"></i>
              <p className="text-sm mt-1">VIP定制</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <i className="fas fa-clipboard-list text-gray-600"></i>
              <p className="text-sm mt-1">外观设置</p>
            </div>
            <div className="text-center">
              <i className="fas fa-cog text-gray-600"></i>
              <p className="text-sm mt-1">隐私设置</p>
            </div>
            <div className="text-center">
              <i className="fas fa-headphones text-gray-600"></i>
              <p className="text-sm mt-1">消息与客服</p>
            </div>
            <div className="text-center">
              <i className="fas fa-shield-alt text-gray-600"></i>
              <p className="text-sm mt-1">信息安全中心</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">UID: 20073012384</p>
        </div>

        {/* <div className="flex justify-around items-center bg-white py-2">
          <div className="text-center">
            <i className="fas fa-gift text-purple-500"></i>
            <p className="text-xs text-gray-500">推荐</p>
          </div>
          <div className="text-center">
            <i className="fas fa-smile text-blue-400"></i>
            <p className="text-xs text-gray-500">星球</p>
          </div>
          <div className="text-center">
            <i className="fas fa-comment-dots text-red-500"></i>
            <p className="text-xs text-gray-500">消息</p>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </div>
          <div className="text-center">
            <i className="fas fa-user text-purple-500"></i>
            <p className="text-xs text-gray-500">我的</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PersonViewPage
