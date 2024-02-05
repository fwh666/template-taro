import React from 'react'
import { MyProvider } from './MyContext'
import SetterComponent from './SetterComponent'
import GetterComponent from './GetterComponent'

function Demo() {
  return (
    <MyProvider>
      <div>
        <SetterComponent />
        <GetterComponent />
      </div>
    </MyProvider>
  )
}

export default Demo
