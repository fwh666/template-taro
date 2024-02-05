import React from 'react';
import { useSharedState } from './MyContext';

function SetterComponent() {
  // 使用 useSharedState() hook 获取共享的状态和修改状态的方法
  const { setSharedState } = useSharedState();

  const handleClick = () => {
    // 修改共享状态的值
    setSharedState(prevState => ({
      ...prevState,
      value1: 'new value',
      value2:99
    }));
  };

  return (
    <div>
      <button onClick={handleClick}>Change Value</button>
    </div>
  );
}

export default SetterComponent;
