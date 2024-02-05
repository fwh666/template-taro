import React from 'react';
import { useSharedState } from './MyContext';

function GetterComponent() {
  // 使用 useSharedState() hook 获取共享的状态
  const { sharedState } = useSharedState();

  return (
    <div>
      <p>Shared Value: {sharedState.value1}</p>
      <p>Shared Value: {sharedState.value2}</p>
    </div>
  );
}

export default GetterComponent;
