import React, { Dispatch, ReactText, SetStateAction, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { clockHours, clockMinutes, generateCreatedDateTime, newDate } from '../../Helpers'
import { ModifyTimeSelectorStyles } from './Styles'

interface ModifyTimeSelectorProps {
  created: Date
  setDateTime: Dispatch<SetStateAction<Date>>
}

export const ModifyTimeSelector: React.FC<ModifyTimeSelectorProps> = (props: ModifyTimeSelectorProps) => {
  const { created, setDateTime } = props
  const createdDateTime = generateCreatedDateTime(created)
  const createdHours = createdDateTime.hours
  const createdMinutes = createdDateTime.minutes

  const [hours, setHours] = useState(createdHours)
  const [minutes, setMinutes] = useState(createdMinutes)

  useEffect(() => {
    if (hours !== createdHours || minutes !== createdMinutes) {
      const { month } = createdDateTime
      const { day } = createdDateTime
      const date = newDate({
        m: month,
        d: day,
        h: hours,
        min: minutes
      })

      date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000)
      setDateTime(date)
    }
  }, [hours, minutes])

  const getPickerItems = (items: string[]) => items.map((i) => <Picker.Item key={i} label={`${i}`} value={i} />)

  const onHoursSelected = (hours: ReactText, _: number) => {
    setHours(parseInt(`${hours}`))
  }

  const onMinutesSelected = (minutes: ReactText, _: number) => {
    setMinutes(parseInt(`${minutes}`))
  }

  return (
    <View style={ModifyTimeSelectorStyles.container}>
      <Picker
        selectedValue={clockHours[hours]}
        style={ModifyTimeSelectorStyles.picker}
        itemStyle={ModifyTimeSelectorStyles.pickerItem}
        onValueChange={onHoursSelected}
      >
        {getPickerItems(clockHours)}
      </Picker>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>:</Text>
      </View>
      <Picker
        selectedValue={clockMinutes[minutes]}
        style={ModifyTimeSelectorStyles.picker}
        itemStyle={ModifyTimeSelectorStyles.pickerItem}
        onValueChange={onMinutesSelected}
      >
        {getPickerItems(clockMinutes)}
      </Picker>
    </View>
  )
}
