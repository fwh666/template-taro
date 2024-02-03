import { View } from '@tarojs/components'
import React, { useState } from 'react'
import PersonBasePage from './personBasePage'
import PersonViewPage from './personViewPage'
const PersonIndex: React.FC = () => {
  const [isPersonComplete, setPersonComplete] = useState<boolean>(false)

  return (
    <div className="bg-gradient">
      {isPersonComplete ? (
        <View>
          <PersonViewPage />
        </View>
      ) : (
        <PersonBasePage />
      )}
    </div>
  )
}

export default PersonIndex
