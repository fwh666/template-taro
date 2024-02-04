import { useState } from 'react'

export default function YourComponent() {
  const [isAgreed, setIsAgreed] = useState(false)

  const handleClick = () => {
    // 这里是点击按钮后需要执行的代码
  }

  return (
    <div>
      <input type="checkbox" onChange={(event) => setIsAgreed(event.target.checked)} />
      <button
        className={`px-4 py-2 text-white bg-blue-500 ${isAgreed ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isAgreed}
        onClick={isAgreed ? handleClick : () => {}}>
        Agree and Continue
      </button>
    </div>
  )
}
