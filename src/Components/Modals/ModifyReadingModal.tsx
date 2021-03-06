import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'

import DeleteConfirmationModal from './DeleteConfirmationModal'
import GradientBorder from '../Minor/GradientBorder'
import SuccessModal from './SuccessModal'

type ModifyReadingModalProps = {
  isVisible: boolean
  id: number
  name: string
  table: string
  dataKey: string
  onClose: () => void
  showReadingModal: () => void
  update: () => void
}

const ModifyReadingModal: React.FC<ModifyReadingModalProps> = (props: ModifyReadingModalProps) => {
  const { isVisible, onClose, id, name, table, dataKey, showReadingModal, update } = props
  
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false)

  return(
    <>
    <Modal
      isVisible={isVisible}
      animationIn='fadeInUp'
      animationOut='fadeOutDown'
      animationInTiming={500}
      animationOutTiming={500}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={Styles.modal}
    >
      <View style={Styles.container}>
        <View style={Styles.buttons}>
          <TouchableOpacity onPress={showReadingModal} style={Styles.button}>
            <Text style={Styles.buttonText}>{'Edit'}</Text>
          </TouchableOpacity>
          <GradientBorder x={1.0} y={1.0} />
          <TouchableOpacity onPress={() => setShowDeleteConfirmationModal(true)} style={Styles.button}>
            <Text style={Styles.buttonText}>{'Delete'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    <SuccessModal isVisible={showSuccessModal} onPress={() => setShowSuccessModal(false)} />
    <DeleteConfirmationModal isVisible={showDeleteConfirmationModal} id={id} name={name} table={table} dataKey={dataKey} onClose={() => setShowDeleteConfirmationModal(false)} update={update} />
    </>
  )
}

export default ModifyReadingModal


const Styles = StyleSheet.create({
  container: {
    width: '70%',
    borderRadius: 2
  },
  modal: {
    alignItems: 'center'
  },
  buttons: {
    backgroundColor: '#ebebeb',
    justifyContent: 'space-around',
    borderRadius: 2
  },
  button: {
    margin: 6
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    padding: 6
  }
})
