import React, { useEffect } from 'react'
import { View } from 'react-native'

import { storeData, needsUpdating } from '../Store'
import BgReading from '../Carousel/Readings/Bg'
import DoseReading from '../Carousel/Readings/Dose'
import MacroReading from '../Carousel/Readings/Macro'
import StatsReading, { IStatsReading } from '../Carousel/Readings/Stats'
import Carousel from '../Carousel'
import { ScreenStyles } from '../../Assets/Styles/Screen'

const getReadings = async (table: string) => {
  const url = `http://localhost:8088/readings/${table}`
  try {
    const readings = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return readings.json()
  } catch(err) {
    console.log('Error getReadings: ', err)
  }
}

const getStats = async () => {
  const days = [3, 7, 14, 30, 90]
  const tmpArr: Array<IStatsReading> = []

  try {
    for (const day of days) {
      const stats = await getReadings(`bg/stats/${day})`)
      tmpArr.push({ created: `${day} Day` , ...stats })
    }
  } catch(err) {
    console.log('Error getStats: ', err)
  }

  return tmpArr.sort(compare)
}

const compare = ( a: IStatsReading, b: IStatsReading ) => {
  const aNumber = parseInt(a.created.split(' ')[0])
  const bNumber = parseInt(b.created.split(' ')[0])

  if ( aNumber < bNumber ){
    return -1;
  }
  if ( aNumber > bNumber ){
    return 1;
  }
  return 0;
}

export const HomeScreen: React.FC = () => {
  useEffect(() => {
    const checkData = async () => {
      try {
        if (await needsUpdating('bgReadings')) {
          const readings = await getReadings('bg')
          await storeData('bgReadings', { updated: Date.now(), readings })
        }

        if (await needsUpdating('bgStats')) {
          const readings = await getStats()
          await storeData('bgStats', { updated: Date.now(), readings })
        }

        if (await needsUpdating('doseReadings')) {
          const readings = await getReadings('dose')
          await storeData('doseReadings', { updated: Date.now(), readings })
        }

        if (await needsUpdating('macroReadings')) {
          const readings = await getReadings('macro')
          await storeData('macroReadings', { updated: Date.now(), readings })
        }
      } catch(err) {
        console.log('Error checkData: ', err)
      }
    }

    checkData()
  }, [])

  return(
    <View style={ScreenStyles.container}>
      <Carousel table={'bg'} Template={BgReading} dataKey={'bgReadings'} />
      <Carousel table={'stats'} Template={StatsReading} dataKey={'bgStats'} />
      <Carousel table={'dose'} Template={DoseReading} dataKey={'doseReadings'} />
      <Carousel table={'macro'} Template={MacroReading} dataKey={'macroReadings'} />
    </View>
  )
}
