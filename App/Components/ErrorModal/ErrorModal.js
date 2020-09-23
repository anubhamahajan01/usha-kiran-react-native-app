import React from 'react';

import { withNavigation } from 'react-navigation';
import { Modal, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './ErrorModalStyle';

class ErrorModal extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <Modal animationType="slide" transparent={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  justifyContent: 'space-between',
                  width: '100%',
                  alignItems: 'flex-end',
                }}
                onPress={() => this.handleRedirect()}
              >
                <Image
                  source={require('../../Assets/Images/close.png')}
                  style={{ width: 12, height: 12 }}
                />
              </TouchableOpacity>
              <Text style={styles.modalText}>Validation Error!</Text>
              <ScrollView style={{ flex: 1 }}>
                {this.props.errorMessage &&
                  this.props.errorMessage.map((msg, index) => {
                    return (
                      <Text style={styles.modalTitle} key={index}>
                        {msg}
                      </Text>
                    );
                  })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  handleRedirect = () => {
    this.props.closeModal();
  };
}

export default withNavigation(ErrorModal);
