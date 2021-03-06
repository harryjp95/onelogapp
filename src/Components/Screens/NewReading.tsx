import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PreviousReadings from '../PreviousReadings/PreviousReadings'
import SavedMacros from '../SavedMacros/SavedMacros'
import NewReadingSelection from '../NewReading/NewReadingSelection'
import { NewBgReading, NewDoseReading, NewMacroReading, NewKetoReading } from '../NewReading/Readings'

const Stack = createStackNavigator()

const NewReadingScreen: React.FC = () => {
  return(
    <>
    <Stack.Navigator initialRouteName="NewReadingSelection" screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="NewReadingSelection" component={NewReadingSelection} />
      <Stack.Screen name="NewBgReading" component={NewBgReading} />
      <Stack.Screen name="NewDoseReading" component={NewDoseReading} />
      <Stack.Screen name="NewMacroReading" component={NewMacroReading} />
      <Stack.Screen name="NewKetoReading" component={NewKetoReading} />
      <Stack.Screen name="PreviousReadings" component={PreviousReadings} />
      <Stack.Screen name="SavedMacros" component={SavedMacros} />
    </Stack.Navigator>
    </>
  )
}

export default NewReadingScreen