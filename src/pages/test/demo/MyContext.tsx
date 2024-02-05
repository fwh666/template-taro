// import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

// // 创建 Context 对象
// interface ContextType {
//   sharedState: { value: string };
//   setSharedState: Dispatch<SetStateAction<{ value: string; }>>; // 使用 Dispatch 和 SetStateAction 来定义 setSharedState 的类型
// }
// const MyContext = createContext<ContextType>({
//   sharedState: { value: '' },
//   setSharedState: () => {}, // 这里设置一个空的函数作为默认值
// });

// // 创建 Context Provider 组件
// export function MyProvider({ children }) {
//   // 定义共享的状态和修改状态的方法
//   const [sharedState, setSharedState] = useState<{ value: string }>({
//     value: 'initial value',
//   });

//   return (
//     <MyContext.Provider value={{ sharedState, setSharedState }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// // 创建自定义 hook，用来在子组件中访问共享的状态和修改状态的方法
// export function useSharedState() {
//   return useContext(MyContext);
// }

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
