import LoginRegistry from '@/components/login/loginRegistry';
import React from 'react';

interface ChildProps {
  isAgreed: boolean
}
const LoginPage: React.FC<ChildProps> = (porps: any) => {
  
  console.log('isAgreed:',porps.isAgreed);
  
  return (
    <div>
      <LoginRegistry isAgreed={porps.isAgreed} />
    </div>
  )
}

export default LoginPage
