import React from 'react';

import { Images } from 'App/Theme';
import { Config } from '../../Config';
import { connect } from 'react-redux';
import { Input, Label } from 'native-base';
import { storeToken, userNameStore } from './../../Actions/Actions';
import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

import ErrorModal from '../../Components/ErrorModal/ErrorModal';

import styles from './LoginScreenStyle';

const axios = require('axios');

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      errorMessage: [],
      showErrorModal: false,
      isButtonDisabled: false,
    };
  }

  handleValidation = () => {
    const { userEmail, userPassword } = this.state;

    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    let errorMessageArr = [];

    if (userEmail === '') {
      // No Data in Email Field
      errorMessageArr.push('Please enter an email.');
    } else {
      // Data in Email Field - Check for Correctness
      if (!userEmail.match(pattern)) {
        errorMessageArr.push('Please enter valid email address.');
      }
    }

    if (userPassword.length === 0) {
      errorMessageArr.push('Please enter a password.');
    }
    if (userPassword.length != 0 && userPassword.length < 6) {
      errorMessageArr.push('The password must be at least 6 characters ');
    }

    if (errorMessageArr.length !== 0) {
      this.setState((state) => ({
        ...state,
        errorMessage: [...errorMessageArr],
        showErrorModal: true,
        isButtonDisabled: false,
      }));

      return false;
    }

    return true;
  };

  making_api_call = () => {
    this.setState({
      isButtonDisabled: true,
    });
    if (this.handleValidation()) {
      this.fetchLoginToken();
    }
  };

  fetchLoginToken = () => {
    let userDetail = {
      email: this.state.userEmail,
      password: this.state.userPassword,
    };
    axios
      .post(`${Config.API_URL}/login`, userDetail)
      .then((response) => {
        this.props.storeToken(response.data.data.token);
        this.props.userNameStore(response.data.data.name);

        this.setState(
          {
            userPassword: '',
            isButtonDisabled: false,
          },
          () => {
            this.handleRedirect('DashboardScreen');
          }
        );
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors.message);

        let errorMessageArr = [...this.state.errorMessage];
        errorMessageArr.push(error.response.data.errors.message);
        this.setState({
          errorMessage: [...errorMessageArr],
          showErrorModal: true,
          isButtonDisabled: false,
        });
      });
  };

  closeModal = () => {
    this.setState({
      userPassword: '',
      errorMessage: [],
      showErrorModal: false,
    });
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <View style={styles.container}>
          <ScrollView>
            <Image source={Images.logo} resizeMode="contain" style={styles.logoImage} />
            <View style={styles.inputContainer}>
              <Label style={styles.TextLabel}>Email Address</Label>
              <Input
                style={styles.TextInput}
                placeholder="Email Address"
                placeholderTextColor="#a7a7a7"
                textContentType="emailAddress"
                keyboardType="email-address"
                value={this.state.userEmail}
                onChangeText={(value) => this.setState({ userEmail: value })}
              />
            </View>
            <View style={styles.inputContainer}>
              <Label style={styles.TextLabel}>Password</Label>
              <Input
                secureTextEntry={true}
                placeholder="Password"
                style={styles.TextInput}
                placeholderTextColor="#a7a7a7"
                value={this.state.userPassword}
                onChangeText={(value) => this.setState({ userPassword: value })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.btnPrimary}
                onPress={() => this.making_api_call()}
                activeOpacity={0.8}
                disabled={this.state.isButtonDisabled}
              >
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.signupText}>
              New User?{' '}
              <Text
                style={[styles.signupText, styles.link]}
                onPress={() => this.handleRedirect('SignupScreen')}
              >
                Sign Up
              </Text>
              {' | '}
              <Text
                style={[styles.forgotPwdText, styles.link]}
                onPress={() => this.handleRedirect('EnterEmailScreen')}
              >
                Forgot Password
              </Text>
            </Text>
          </ScrollView>
          {this.state.showErrorModal ? (
            <ErrorModal errorMessage={this.state.errorMessage} closeModal={this.closeModal} />
          ) : null}
        </View>
      </>
    );
  }

  handleRedirect = (screenName) => {
    this.props.navigation.navigate(screenName);
  };
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {
  storeToken,
  userNameStore,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
