import React, { createContext, useContext, useEffect, useState } from 'react'

// 定义共享状态的类型
interface SharedState {
  value1: string
  value2: number
  gender: string //female 女 1； male 男 2；
  birthday: string //2000-01-01
  education: string //本科
  address: string //现居地
  hometown: string //家乡
  avaImage: string //头像
}

// 创建 Context 对象
const MyContext = createContext<{
  sharedState: SharedState
  setSharedState: React.Dispatch<React.SetStateAction<SharedState>>
}>({
  sharedState: {
    value1: '',
    value2: 0,
    gender: 'female',
    birthday: '2000-01-01',
    education: '本科',
    address: '北京',
    hometown: '北京',
    avaImage: ''
  },
  setSharedState: () => {}
})

// 创建 Context Provider 组件
// export const MyProvider: React.FC = ({ children }) => {
export function MyProvider({ children }) {
  const [sharedState, setSharedState] = useState<SharedState>({
    value1: 'initial value',
    value2: 0,
    gender: 'female',
    birthday: '2000-01-01',
    education: '本科',
    address: '北京',
    hometown: '北京',
    avaImage: 'xindong.com'
  })

  // useEffect(() => {
  //   console.log('useEffect')
  //   setSharedState({
  //     ...sharedState,
  //     value1: 'changed value'
  //   })
  // }, [])

  // useEffect(() => {
  //   console.log('useEffect')
  //   setSharedState({
  //     ...sharedState,
  //     value1: 'changed value'
  //   })
  // }, [sharedState.address, sharedState.gender]);

  return <MyContext.Provider value={{ sharedState, setSharedState }}>{children}</MyContext.Provider>
}

// 创建自定义 hook，用来在子组件中访问共享的状态和修改状态的方法
export const useSharedState = () => useContext(MyContext)
