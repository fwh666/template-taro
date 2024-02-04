import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'

interface ChildProps {
  isAgreed: boolean
}

const LoginRegistry: React.FC<ChildProps> = (porps: any) => {
  console.log('isAgreed:', porps.isAgreed)
  const isAgreed = porps.isAgreed
  const [isOpenedPrivacy, setIsOpenedPrivacy] = useState(false)
  const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false)

  const handleIsAgreed = () => {
    console.log('点击同意')
    setIsAgreePrivacy(true)
  }

  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
    if (event.target.checked) {
      console.log('复选框已勾选')
    } else {
      console.log('复选框已取消勾选')
    }
  }

  const toCommend = () => {
    Taro.navigateTo({
      url: '/pages/commend/commend'
    })
  }
  const toPersonBase = () => {
    Taro.navigateTo({
      url: '/pages/myself/personBasePage'
    })
  }
  const toPrivatePage = () => {
    Taro.navigateTo({
      url: '/pages/private/privatePage'
    })
  }

  const handleOpenPrivacy = () => {
    console.log('打开隐私提示')
    // 弹出隐私同意窗口
    toPrivatePage()
    // Taro.redirectTo({
    //   url: '/pages/private/privatePage'
    // })
  }

  // 同意后-微信登录
  if (isAgreed) {
    console.log('开始微信登录')
    // 校验是否已经登录态
    const loginCode = Taro.getStorageSync('loginCode')
    console.log('loginCode:', loginCode)
    if (loginCode) {
      // 已经登录态
      console.log('已经登录态')
      toPersonBase()
    }

    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('code:', res.code)
          // 登录成功-存储-跳转首页tar
          Taro.setStorageSync('loginCode', 'loginCode')
          toCommend()
          //发起网络请求
          // Taro.request({
          //   url: 'http://127.0.0.1:8080/xd/wx/login',
          //   method: 'POST',
          //   header: {
          //     'content-type': 'application/json'
          //   },
          //   data: {
          //     code: res.code
          //   },
          //   success: function (res) {
          //     console.log(res.data)
          //     const openid = res.data.openid
          //     const session_key = res.data.session_key
          //     console.log(openid)
          //     console.log(session_key)
          //     // 成功后调整推荐页
          //     toCommend()
          //   },
          //   fail: function (err) {
          //     console.log(err)
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  } else {
    console.log('需要同意隐私')
  }

  return (
    <View>
      <View className="max-w-sm mx-auto">
        <View className="text-center pt-8">
          <View className="mt-4">
            <img
              alt="Logo of a fox wearing a red scarf"
              className="mx-auto"
              height="64"
              src="https://img0.baidu.com/it/u=3232582821,3516640051&fm=253&fmt=auto&app=138&f=JPEG?w=625&h=500"
              width="64"
            />
            <h1 className="text-lg font-semibold mt-2">二狗健身第三年目标平台</h1>
            <p className="text-gray-600 text-sm mt-1">零售 健身 房的实名制交友社区</p>
          </View>
        </View>
        <View className="mt-8 space-y-4">
          <View className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">300万+优秀单身青年</h2>
            <p className="text-gray-600 text-sm mt-1">涵盖顶尖内部论坛，BAT/金融投行/公务员都在用</p>
          </View>
          <View className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">三年超10W人脱单</h2>
            <p className="text-gray-600 text-sm mt-1">运营三年，已经帮助超10W人在此脱单增肌</p>
          </View>
          <View className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">实名认证保障信息真实性</h2>
            <p className="text-gray-600 text-sm mt-1">对接官方系统，通过身份认证才可使用</p>
          </View>
          <View className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold">100%保障用户信息安全</h2>
            <p className="text-gray-600 text-sm mt-1">使用阿里云服务托管大型，100%保障用户信息安全</p>
          </View>
        </View>
        <View className="mt-8">
          <Button
            disabled={false}
            className="inline-block bg-blue-600 text-white w-1/2 flex justify-center py-3 rounded-lg font-semibold border-e px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-700 focus:relative"
            onClick={handleOpenPrivacy}>
            微信快捷登录/注册
          </Button>
        </View>
        {/* <View className="text-center text-gray-600 text-sm mt-8 mb-4">隐私条款</View> */}
        <View className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {/* <span className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>同意《用户服务协议》和《隐私保护指引》</span> */}
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            我同意
            <a href="#" className="bottom-2 right-48 text-blue-600 dark:text-blue-500 hover:underline">
              《用户服务协议》和《隐私保护指引》
            </a>
          </label>
        </View>

        {/* <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            // onClick={() => setIsAgreePrivacy(true)}
            // onClick={handleIsAgreed}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label for="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            我同意{' '}
            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
              条款和条件
            </a>
          </label>
        </div> */}
      </View>
    </View>
  )
}

export default LoginRegistry
