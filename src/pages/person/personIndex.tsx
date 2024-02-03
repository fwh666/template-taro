import { View } from '@tarojs/components'
import React, { useState } from 'react'
import PersonBasePage from './personBasePage'
import PersonViewPage from './personViewPage'
const PersonIndex: React.FC = () => {
  const [isPersonComplete, setPersonComplete] = useState<boolean>(true)

  return (
    <div>
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
