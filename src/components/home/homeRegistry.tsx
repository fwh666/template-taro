import { Button, View } from '@tarojs/components'
import { useState } from 'react'
import PrivacyAgreement from '../agree/PrivacyAgreement'

export default function HomeRegistry() {
  const [isOpenedPrivacy, setIsOpenedPrivacy] = useState(false)
  const [isAgreePrivacy, setIsAgreePrivacy] = useState<boolean>(false)

  const handleOpenPrivacy = () => {
    console.log('open privacy')
    setIsOpenedPrivacy(true)
  }

  // const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data: boolean) => {
    // 在这里处理从子组件传递过来的数据
    console.log('data', data)
    setIsOpenedPrivacy(data)
    //按钮勾选隐私
    setIsAgreePrivacy(true)
    // 同意隐私-调用接口微信登录-跳转首页
    if (isAgreePrivacy) {
      console.log('agree privacy')
      // todo-fwh-微信登录
      // TODO 你的注释-登录成功-跳转到下一个页面滑动页面 如果之前没有注册过数据，就滑动，有就跳转到完善资料页
    } else {
      console.log('no agree privacy')
    }
  }

  return (
    <View>
      {isOpenedPrivacy ? (
        <PrivacyAgreement sendDataToParent={handleDataFromChild} />
      ) : (
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
            <Button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold" onClick={handleOpenPrivacy}>
              微信快捷登录/注册
            </Button>
          </View>
          <View className="text-center text-gray-600 text-sm mt-8 mb-4">隐私条款</View>
          <View className="text-center text-gray-600 text-sm">
            <span>同意《用户服务协议》和《隐私保护指引》</span>
          </View>
        </View>
      )}
    </View>
  )
}
