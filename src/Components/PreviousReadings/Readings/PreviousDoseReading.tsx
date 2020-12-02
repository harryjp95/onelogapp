import React, { useState } from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import ModifyDoseModal from '../../Modals/Modification/ModifyDoseModal'
import { GradientBorder } from '../../Minor'
import { generateCreatedTime } from '../../../Helpers/Date'
import { StoredDoseReading } from '../../../types'

interface PreviousDoseReadingProps {
  reading: StoredDoseReading
  update: (dataKey: string) => void
}

export const PreviousDoseReading: React.FC<PreviousDoseReadingProps> = (props: PreviousDoseReadingProps) => {
  const { reading, update } = props

  const [showModifyDoseModal, setShowModifyDoseModal] = useState(false)

  const { created, data, long } = reading
  const timeCreated = generateCreatedTime(created)

  const generateColors = () => (long ? ['#e0d5b7', '#ebebeb'] : ['#ebebeb', '#b56076'])

  const generateStartPoint = () => {
    const y = long ? (data - 10) / 25 : 1 - data / 20
    return { x: 0.5, y }
  }

  const generateReading = () => (`${data}`.length < 2 ? data.toFixed(1) : data)

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity onPress={() => setShowModifyDoseModal(true)}>
            <Image source={require('../../../Assets/Images/NavBarSettings.png')} style={Styles.icon} />
          </TouchableOpacity>
          <Text style={Styles.timeCreated}>{timeCreated}</Text>
          <TouchableOpacity>
            <Image source={require('../../../Assets/Images/NavBarSettings.png')} style={Styles.placeholder} />
          </TouchableOpacity>
        </View>
        <GradientBorder x={1.0} y={1.0} />
        <TouchableOpacity onPress={() => setShowModifyDoseModal(true)} style={{ width: '100%' }}>
          <View style={Styles.reading}>
            <LinearGradient colors={generateColors()} start={generateStartPoint()}>
              <Text style={Styles.readingText}>{generateReading()}</Text>
            </LinearGradient>
          </View>
          <GradientBorder x={1.0} y={1.0} />
          <Text style={Styles.typeText}>{long ? 'Long' : 'Short'}</Text>
        </TouchableOpacity>
      </View>
      <ModifyDoseModal
        isVisible={showModifyDoseModal}
        reading={reading}
        onClose={() => setShowModifyDoseModal(false)}
        update={update}
      />
    </>
  )
}

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 4,
    width: '23%'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    tintColor: 'black',
    height: 10,
    width: 10
  },
  placeholder: {
    tintColor: '#ebebeb',
    height: 10,
    width: 10
  },
  timeCreated: {
    fontSize: 14
  },
  reading: {
    width: '100%'
  },
  readingText: {
    width: '100%',
    fontSize: 34,
    textAlign: 'center'
  },
  typeText: {
    textAlign: 'center'
  }
})
