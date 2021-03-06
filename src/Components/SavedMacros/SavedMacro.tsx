import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

import GradientBorder from '../Minor/GradientBorder'
import ModifyReadingModal from '../Modals/ModifyReadingModal'
import ModifySavedMacroModal from '../Modals/ModifySavedMacroModal'
import { formatName } from '../../Helpers/General'

export type TSavedMacro = {
  id: number
  created: Date
  name: string
  kcal: number
  carbs: number
  sugar: number
  protein: number
  fat: number
  unit: string
  amount: number
  times_added: number
}

type SavedMacroProps = {
  data: TSavedMacro
  update: () => void
}

const SavedMacro: React.FC<SavedMacroProps> = (props: SavedMacroProps) => {
  const { data, update } = props
  const { id, name, kcal, carbs, sugar, protein, fat, amount, unit } = data

  const [showModifyReadingModal, setShowModifyReadingModal] = useState(false)
  const [showModifySavedMacroModal, setShowModifySavedMacroModal] = useState(false)

  return(
    <>
    <View style={Styles.container}>
      <View style={Styles.title}>
        <TouchableOpacity onPress={() => setShowModifyReadingModal(true)}>
          <Image source={require('../../Assets/Images/NavBarSettings.png')} style={Styles.icon} />
        </TouchableOpacity>
        <Text style={Styles.name}>{formatName(name)}</Text>
        <TouchableOpacity>
          <Image source={require('../../Assets/Images/NavBarNewReading.png')} style={Styles.icon} />
        </TouchableOpacity>
      </View>
      <GradientBorder x={1.0} y={1.0} />
      <Text>{amount} {unit}</Text>
      <GradientBorder x={1.0} y={1.0} />
      <View style={Styles.readingContainer}>
        <View style={Styles.labels}>
          <Text style={Styles.label}>{'Kcal:'}</Text>
          <Text style={Styles.label}>{'Carbs:'}</Text>
          <Text style={Styles.label}>{'Sugar:'}</Text>
          <Text style={Styles.label}>{'Protein:'}</Text>
          <Text style={Styles.label}>{'Fat:'}</Text>
        </View>

        <View style={Styles.values}>
          <Text style={Styles.value}>{ kcal.toFixed(2) }</Text>
          <Text style={Styles.value}>{ carbs.toFixed(2) }</Text>
          <Text style={Styles.value}>{ sugar.toFixed(2) }</Text>
          <Text style={Styles.value}>{ protein.toFixed(2) }</Text>
          <Text style={Styles.value}>{ fat.toFixed(2) }</Text>
        </View>
      </View>
    </View>
    <ModifyReadingModal isVisible={showModifyReadingModal} onClose={() => setShowModifyReadingModal(false)} id={id} name={name} table={'macro/saved'} dataKey={'savedMacros'} showReadingModal={() => setShowModifySavedMacroModal(true)} update={update} />
    <ModifySavedMacroModal isVisible={showModifySavedMacroModal} data={data} onClose={() => setShowModifySavedMacroModal(false)} update={update} />
    </>
  )
}

export default SavedMacro


const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    borderWidth: 0.5,
    paddingLeft: 6,
    paddingRight: 6,
    margin: '1.1%',
    width: '31%'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  icon: {
    tintColor: 'black',
    height: 14,
    width: 14,
    padding: 4,
    marginTop: 4
  },
  name: {
    flex: 5,
    fontSize: 16,
    textAlign: 'center'
  },
  readingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  labels: {
    flexDirection: 'column',
    padding: 10
  },
  label: {
    fontSize: 14,
    color: '#3f3d3d'
  },
  values: {
    flexDirection: 'column',
    padding: 10
  },
  value: {
    fontSize: 14,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    color: 'black'
  }
})