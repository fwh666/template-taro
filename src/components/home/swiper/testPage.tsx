import React from 'react'
import { MyProvider, useSharedState } from './MyContext'
import { AtButton } from 'taro-ui'

function TestPage() {
  // 使用 useSharedState() hook 获取共享的状态和修改状态的方法
  const { setSharedState } = useSharedState()

  const handleClick = () => {
    console.log('点击了test')

    // 修改共享状态的值
    setSharedState((prevState) => ({
      ...prevState,
      value1: 'new value',
      value2:88
    }))
  }

  return (
    <div>
      <AtButton onClick={handleClick}>Change Value</AtButton>
    </div>
  )
}

export default TestPage
