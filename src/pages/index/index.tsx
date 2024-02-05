import { View } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { useEffect, useState } from 'react'

import CommendPersonTodo from '@/components/commend/commendPersonTodo'
import MySwiper from '@/components/home/swiper/MySwiper'
import CommendIndex from '../commend/commendIndex'
import LoginPage from '../login/loginPage'
import './index.scss'
import Demo from '../test/demo/demo'

export default function Index() {
  useEffect(() => {
    console.log('useEffect')
    // TODO: 数据查询
    // isRegisterCheck()
    isLoggedCheck()
  })

  useEffect(() => {
    console.log('useEffect')
    // 监听事件，当收到名为 'switchToHome' 的事件时触发 useEffect
    Taro.eventCenter.on('switchToHome', () => {
      console.log('Received switchToHome event');
      isLoggedCheck()
      // 触发 useEffect
    });

    // 在组件卸载时取消事件监听
    return () => {
      Taro.eventCenter.off('switchToHome');
    };
  }, []);


  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [loginStatus, setLoginStatus] = useState<number>(0)
  const [isRegistered, setIsRegistered] = useState<boolean>(false)

  const isRegisterCheck = () => {
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('code:', res.code)
          //发起网络请求
          Taro.request({
            url: 'http://127.0.0.1:8080/xd/wx/login',
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            data: {
              code: res.code
            },
            success: function (res) {
              console.log(res.data)
              // TODO: 用户唯一ID和微信ID绑定，返回唯一ID。 openId查询uid
              const uid = res.data.uid
              const registered = res.data.registered
              const logined = res.data.logined
              console.log(uid, registered, logined)

              setIsRegistered(registered)
              setIsLogged(logined)
              // 登录成功-存储-跳转首页tar
              // Taro.setStorageSync('loginCode', 'loginCode')
            },
            fail: function (err) {
              console.log('微信登录失败', err)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  // 校验登录状态信息
  const isLoggedCheck = () => {
    const loginCode = Taro.getStorageSync('LoginStatus')
    setLoginStatus(loginCode)
    if (loginCode) {
      console.log('isLogged')
      setIsLogged(true)
    }
  }

  const router = useRouter()
  const isAgree: any = router.params.isAgree
  console.log('isAgree', isAgree)

  return (
    <View className="index">
      {/* <Router>
      <Switch>
        <Routes exact path="/">
          {isLogged === 1 ? <Redirect to="/page-one" /> : (isLogged === 2 ? <Redirect to="/page-two" /> : <Redirect to="/page-three" />)}
        </Route>
        <Route path="/page-one" component={PageOne} />
        <Route path="/page-two" component={PageTwo} />
        <Route path="/page-three" component={PageThree} />
      </Switch>
    </Router> */}

      {/* 登录态？推荐页：登录页面 */}
      {/* // TODO: 1-注册登录初始化 2-登录资料不完整 3-登录资料完整 */}
      {loginStatus === 1 ? (
        // <Demo/>
        <MySwiper />
      ) : loginStatus === 2 ? (
        <CommendPersonTodo />
      ) : loginStatus === 3 ? (
        <CommendIndex />
      ) : (
        <LoginPage isAgreed={isAgree} />
      )}

      {/* TODO: 没有登录，跳转登录首页；已经登录跳转推荐页 */}
      {/* {isLogged === false && isRegistered === false ? <CommendIndex /> : <LoginPage isAgreed={isAgree} />} */}

      {/* TODO: 没有登录和未注册，跳转注册页面； 已注册，跳转完善资料*/}
    </View>
  )
}
