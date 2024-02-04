// PrivacyAgreement.tsx
import routes from '@/routeConfig'
import { Button, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import React, { useState } from 'react'
import { AtModal, AtModalAction, AtModalContent, AtModalHeader } from 'taro-ui'

interface ChildComponentProps {
  sendDataToParent: (data: boolean) => void
}

const PrivacyAgreement: React.FC<ChildComponentProps> = ({ sendDataToParent }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const toCommend = () => {
    // Taro.switchTab({
    //   url: `/${routes.homeIndex}`
    // })
    Taro.navigateTo({
      url: `/${routes.commendIndex}`
    })
  }

  const toHomeIndex = () => {
    Taro.switchTab({
      url: `/${routes.homeIndex}`
    })
  }

  const handleShowModal = () => {
    setIsOpened(true)
  }

  const handleConfirm = (event) => {
    console.log(event.target)
    console.log('点击了同意')
    //TODO: 用户自动登录 用户同意隐私协议后的处理逻辑，可以在这里调用后端接口，进行相关操作
    // 同意后-微信登录
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log('code:', res.code)
          // 登录成功-存储-跳转首页tar
          Taro.setStorageSync('loginCode', 'loginCode')
          console.log('登录成功')
          // 传递父类
          // sendDataToParent(true)
          // toCommend()
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
              const LoginStatus = res.data.loginStatus
              console.log(uid, registered, logined, LoginStatus)
              // 登录成功-存储-跳转首页tar
              // TODO: 注册成功-跳转注册页； 登录成功-跳转完善资料页
              // TODO: 1-注册登录初始化 2-登录资料不完整 3-登录资料完整
              Taro.setStorageSync('LoginStatus', LoginStatus)
              toHomeIndex()
            },
            fail: function (err) {
              console.log(err)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  const handleCancel = () => {
    setIsOpened(false)
    console.log('点击了取消')
    // 用户拒绝隐私协议后的处理逻辑
  }

  return (
    <View className="privacy-agreement">
      <Button onClick={handleShowModal}>阅读隐私协议</Button>
      <AtModal isOpened={isOpened} closeOnClickOverlay={false}>
        <AtModalHeader>温馨提示</AtModalHeader>
        <AtModalContent>
          {/* 这里放置隐私协议内容 */}
          感谢您信任并使用单身青年自救平台小程序!为了切实保护平台用户隐私权优化用户体验，营造友好、真诚、不虚假的平台交友氛围。平台根据现行的法律法规、监管政策要求及运营实际情况更新了单身青年自救平台的《用户服务协议》《隐私保护政策)请您仔细阅读并充分理解相关条款在确认理解和同意后再使用单身青年自救平台提供的产品和相关服务。
          如您同意以上协议和政策，请点击“同意”并开始使用我们的产品和服务，我们会尽全力保护您的个人信息安全{' '}
          {/* 示例内容结束 */}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handleConfirm}>同意</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}

export default PrivacyAgreement
