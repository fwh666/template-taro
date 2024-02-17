import React from 'react'
import { MyProvider, useSharedState } from './MyContext'
import TestPage from './testPage'

export default function LastPage() {
  // 使用 useSharedState() hook 获取共享的状态
  const { sharedState } = useSharedState()
  console.log('sshared', sharedState)

  return (
    <div>
      {/* <p>Shared Value: {sharedState.value1}</p> */}
      <ul>
        {Object.entries(sharedState).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
