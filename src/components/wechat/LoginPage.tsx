// LoginPage.tsx
import { Button, View } from '@tarojs/components';
import Taro from '@tarojs/taro';

const LoginPage: React.FC = () => {
  const handleLogin = async () => {
    try {
      const res = await Taro.login();
      if (res.code) {
        // 将 code 发送到后台服务器
        const response = await Taro.request({
          url: 'http://127.0.0.1:4523/m1/3942731-0-default/xd/wechat/login',
          method: 'POST',
          data: {
            code: res.code
          }
        });
        // 处理后台返回的用户信息
        console.log('用户信息：', response.data);
      } else {
        console.log('登录失败！', res.errMsg);
      }
    } catch (error) {
      console.error('登录失败！', error);
    }
  }

  return (
    <View>
      <Button onClick={handleLogin}>微信登录</Button>
    </View>
  );
}

export default LoginPage;