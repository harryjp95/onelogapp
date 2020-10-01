import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'

import MacroReadingInput from './MacroReadingInput'

type ModifyMacroModalProps = {
  isVisible: boolean
  onClose: () => void
}

const ModifyMacroModal: React.FC<ModifyMacroModalProps> = (props: ModifyMacroModalProps) => {
  const { isVisible, onClose } = props
  const [reading, setReading] = useState<{[key: string]: string | number}>({})

  return(
    <Modal
      isVisible={isVisible}
      animationIn='fadeInUp'
      animationOut='fadeOutDown'
      animationInTiming={500}
      animationOutTiming={500}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View style={Styles.container}>
        <MacroReadingInput updateReading={setReading} />
      </View>
    </Modal>
  )
}

export default ModifyMacroModal

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})