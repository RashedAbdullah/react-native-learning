import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const DialogBox = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DialogBox</Text>
      {show && (
        <Modal
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShow(!show)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Beautiful Modal</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShow(false)}>
                <Text style={styles.buttonText}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <TouchableOpacity style={styles.button} onPress={() => setShow(!show)}>
        <Text style={styles.buttonText}>Show Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#0f172a',
  },
  button: {
    backgroundColor: '#0f172a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DialogBox;
