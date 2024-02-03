import CommendHome from '@/components/commend/commendHome'
import CommendPersonTodo from '@/components/commend/commendPersonTodo'
import React, { useState } from 'react'
// 推荐页面
const CommendIndex: React.FC = () => {
  const [isPersonComplete, setPersonComplete] = useState<boolean>(false)

  // const toPersonBase = () => {
  //   Taro.navigateTo({
  //     url: `${routes.personBase}`
  //   })
  // }
  return (
    <div>
      {/* TODO: 资料？调整完善页面 */}
      {isPersonComplete ? <CommendHome /> : <CommendPersonTodo />}
    </div>
  )
}

export default CommendIndex
