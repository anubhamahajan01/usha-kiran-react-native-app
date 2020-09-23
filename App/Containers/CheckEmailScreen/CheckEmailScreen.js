import React from 'react';
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Images, Helpers } from 'App/Theme';
import styles from './CheckEmailScreenStyle';

export default class CheckEmailScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <View style={styles.container}>
          <Image source={Images.logo} resizeMode="contain" style={styles.logoImage} />
          <Text style={styles.text}>
            Thank you for submitting your Email. Please check your inbox for further process.
          </Text>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => this.handleRedirect('LoginScreen')}
            activeOpacity={0.8}
          >
            <Text style={styles.btnText}>Go To Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  handleRedirect = (screenName) => {
    this.props.navigation.navigate(screenName);
  };
}
