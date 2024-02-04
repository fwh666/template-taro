import routes from '@/routeConfig'
import Taro from '@tarojs/taro'
import React from 'react'

const CommendPersonTodo: React.FC = () => {
  const toPersonBase = () => {
    Taro.switchTab({
      url: `/${routes.personIndex}`
    })
  }
  return (
    <div className="bg-gradient">
      <div className="contents">
        <div className="text-center py-4">
          <div className="mt-2">
            <h1 className="text-2xl font-bold">完善资料和认证</h1>
            <p className="text-gray-600 mt-2">营造靠谱交友环境</p>
          </div>
        </div>
        {/*TODO: 样式修改 提示语添加对钩和叉号  提示语去完善资料*/}
        <div className="flex justify-between w-full px-4 mb-4">
          <div className="bg-gray-200  rounded-lg shadow p-4 w-1/2 mr-2">
            <div className="text-center">
              <img
                alt="Placeholder image of a sad cloud indicating no messages"
                className="mx-auto mb-2"
                height="64"
                width="64"
              />
              <p className="text-sm text-gray-500">无消息无法显示</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-times-circle mr-2"></i>
                <span>无照片无法显示</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-times-circle mr-2"></i>
                <span>不可加好友</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <i className="fas fa-times-circle mr-2"></i>
                <span>不可发动态/评论</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fas fa-times-circle mr-2"></i>
                <span>无精准匹配</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 rounded-lg shadow p-4 w-1/2 mr-2">
            <div className="flex justify-between">
              <div className="flex -space-x-2">
                <img
                  alt="Placeholder image of a user"
                  className="rounded-full border-2 border-white"
                  height="32"
                  width="32"
                />
                <img
                  alt="Placeholder image of a user"
                  className="rounded-full border-2 border-white"
                  height="32"
                  width="32"
                />
                <img
                  alt="Placeholder image of a user"
                  className="rounded-full border-2 border-white"
                  height="32"
                  width="32"
                />
              </div>
              <span className="bg-red-500 rounded-full px-2 py-1 text-xs">99+</span>
            </div>
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <i className="fas fa-check-circle mr-2"></i>
                <span>有照片有显示</span>
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-check-circle mr-2"></i>
                <span>可加好友</span>
              </div>
              <div className="flex items-center mb-2">
                <i className="fas fa-check-circle mr-2"></i>
                <span>可发动态/评论</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                <span>有精准匹配</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mb-4">
          {/*<button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold" onClick={toPersonBase}>*/}
          {/*  完善资料*/}
          {/*</button>*/}
          <button
            className="inline-block bg-blue-600 text-white w-1/2 flex justify-center py-3 rounded-lg font-semibold border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700 focus:relative"
            onClick={toPersonBase}
          >
            完善资料
          </button>
        </div>

        <div className="text-center text-gray-500 text-sm pb-4">
          <p>精品内容，开启今日推荐</p>
          <div className="flex justify-around mt-4">
            <i className="fas fa-home"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommendPersonTodo
