import React from 'react';
import { Platform, BackHandler, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Helpers, Images } from 'App/Theme';
import AppHeader from '../../Components/AppHeader/AppHeader';
import styles from './RequestSuccessScreenStyle';
let phoneNumber = '+919876543210';

export default class RequestSuccessScreen extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () =>
        this.props.navigation.navigate('DashboardScreen')
      );
    }
  }

  handleRedirect = (screenName) => {
    this.props.navigation.navigate(screenName);
  };

  callAssistance = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  render() {
    return (
      <View style={styles.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
        <View style={[styles.container]}>
          <View style={Helpers.fillCenter}>
            <Image style={styles.imageTick} source={Images.tick} resizeMode="contain" />
            <Text style={[styles.text, styles.thankyouText]}>
              Thank you so much for your invaluable contribution. We will contact you soon.
            </Text>
            <Text style={[styles.text, styles.contactText]}>For any assistance please call</Text>
            <TouchableOpacity
              style={styles.callBtn}
              activeOpacity={0.8}
              onPress={() => this.callAssistance()}
            >
              <Image style={styles.imageCall} source={Images.call} resizeMode="contain" />
              <Text style={styles.textCall}>{phoneNumber}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnPrimary}
              onPress={() => this.handleRedirect('DashboardScreen')}
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>Go to Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      this.backHandler.remove();
    }
  }
}
