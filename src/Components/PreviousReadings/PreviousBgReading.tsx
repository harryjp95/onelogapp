import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import GradientBorder from '../Minor/GradientBorder'
import { generateCreatedTime } from '../../Helpers/Date'

type PreviousBgReadingProps = {
  created: string,
  reading: number
}

const PreviousBgReading: React.FC<PreviousBgReadingProps> = (props: PreviousBgReadingProps) => {
  const { created, reading } = props
  const timeCreated = generateCreatedTime(created)

  const generateColor = () => {
    if (reading < 3.9) return 'rgba(217, 30, 30, 0.9)' //'#d91e1e'
    if (reading >= 3.9 && reading < 8.1) return '#279621'
    if (reading > 8.0) return '#deda00'
  }

  const color = reading && generateColor() || '#ebebeb'

  return(
    <View style={Styles.container}>
      <View><Text style={Styles.timeCreated}>{timeCreated}</Text></View>
      <GradientBorder x={1.0} y={1.0} />
      <View>
        <LinearGradient colors={['#ebebeb', color]} start={{ x: 0.5, y: 0.75}}>
          <Text style={Styles.reading}>{reading.toFixed(1)}</Text>
        </LinearGradient>
      </View>
    </View>
  )
}

export default PreviousBgReading


const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderWidth: 0.5,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 8
  },
  timeCreated: {
    fontSize: 16
  },
  reading: {
    fontSize: 38
  }
})