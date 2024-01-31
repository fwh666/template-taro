import { Button, View } from '@tarojs/components'

export default function HomeRegistry() {
  const handleOpenTips = () => {
    console.log('open tips')
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
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-bPxYzl3scJOnAm1gNz87jD4g/user-J1G3ILc1ZIqay44FXSxUp16W/img-mYq6lDsyFdzwacdtrtb3ZUBD.png?st=2024-01-20T10%3A44%3A28Z&amp;se=2024-01-20T12%3A44%3A28Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-01-19T19%3A43%3A36Z&amp;ske=2024-01-20T19%3A43%3A36Z&amp;sks=b&amp;skv=2021-08-06&amp;sig=AT/UNfJadI/HnNN3a%2BCpA0mgdn8NiwPRSvjojen5SUM%3D"
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
          <Button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold" onClick={handleOpenTips}>
            微信快捷登录/注册
          </Button>
        </View>
        <View className="text-center text-gray-600 text-sm mt-8 mb-4">隐私条款</View>
        <View className="text-center text-gray-600 text-sm">
          <span>同意《用户服务协议》和《隐私保护指引》</span>
        </View>
      </View>
    </View>
  )
}
