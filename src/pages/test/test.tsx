import request from '@/utils/request'
import { Button } from '@tarojs/components'
export default function WeChatTest() {
  const test = () => {
    // 定义一个函数用于发送POST请求

    // 模拟发送POST请求的示例
    let url = 'https://reqbin.com/echo/post/json'
    let data = {
      userId: 1,
      title: 'Fix my bugs',
      completed: false
    }
    let contentType = 'application/json'

    // 调用post函数发送POST请求
    const res = request.post(url, data, contentType)
    console.log(res)
  }

  return (
    <div>
      <Button onClick={test}>WeChatTest</Button>
    </div>
  )
}
