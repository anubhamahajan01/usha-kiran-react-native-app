import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking, StatusBar } from 'react-native';
import styles from './SplashScreenStyle';
import { Helpers, Images } from 'App/Theme';
import { connect } from 'react-redux';
const axios = require('axios');

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      if (this.props.token !== '') {
        this.props.navigation.navigate('DashboardScreen');
      } else {
        this.props.navigation.navigate('LoginScreen');
      }
    }, 3000);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <View style={[Helpers.fillRowCenter, styles.container]}>
          <View style={Helpers.center}>
            <Image source={Images.logo} />
            <TouchableOpacity
              onPress={() => Linking.openURL('https://ushakiran.org.in/')}
              activeOpacity={0.8}
            >
              <Text style={styles.link}>www.ushakiran.org.in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
