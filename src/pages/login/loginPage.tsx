import HomeRegistry from '@/components/home/homeRegistry';
import React from 'react';

interface ChildProps {
  isAgreed: boolean
}
const LoginPage: React.FC<ChildProps> = (porps: any) => {
  
  console.log('isAgreed:',porps.isAgreed);
  
  return (
    <div>
      <HomeRegistry isAgreed={porps.isAgreed} />
    </div>
  )
}

export default LoginPage
