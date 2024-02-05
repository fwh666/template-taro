import React, { createContext, useContext, useState } from 'react'

// 定义共享状态的类型
interface SharedState {
  value1: string
  value2: number
}

// 创建 Context 对象
const MyContext = createContext<{
  sharedState: SharedState
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>
}>({
  sharedState: { value1: '', value2: 0 },
  setSharedState: () => {}
})

// 创建 Context Provider 组件
// export const MyProvider: React.FC = ({ children }) => {
export function MyProvider({ children }) {
  const [sharedState, setSharedState] = useState<SharedState>({
    value1: 'initial value',
    value2: 0
  })

  return <MyContext.Provider value={{ sharedState, setSharedState }}>{children}</MyContext.Provider>
}

// 创建自定义 hook，用来在子组件中访问共享的状态和修改状态的方法
export const useSharedState = () => useContext(MyContext)
