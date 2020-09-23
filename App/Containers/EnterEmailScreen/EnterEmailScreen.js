import React from 'react';
import { Config } from '../../Config';
import { Text, View, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Form, Input, Label } from 'native-base';
import { Images } from 'App/Theme';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';

import styles from './EnterEmailScreenStyle';

const axios = require('axios');

export default class EnterEmailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errorMessage: [],
      ShowModal: false,
      isButtonDisabled: false,
    };
  }

  handleValidation = () => {
    const { email } = this.state;

    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    let errorMessageArr = [];
    if (email === '') {
      errorMessageArr.push('Please Enter Email');
      this.setState({
        errorMessage: [...errorMessageArr],
        ShowModal: true,
      });
      return false;
    }
    if (!email.match(pattern)) {
      errorMessageArr.push('Please Enter Valid Email-ID');
      this.setState({
        errorMessage: [...errorMessageArr],
        ShowModal: true,
      });
      return false;
    }
    if (errorMessageArr.length != 0) {
      this.setState({
        isButtonDisabled: false,
      });
      return false;
    }
    return true;
  };

  making_api_call = () => {
    this.setState({
      isButtonDisabled: true,
    });
    if (this.handleValidation()) {
      // alert('login succesfully');
      this.verifyEmail();
    }
  };

  verifyEmail = () => {
    let userDetail = {
      email: this.state.email,
    };
    axios
      .post(`${Config.API_URL}/verify-email`, userDetail)
      .then((response) => {
        if (response.status === 204) {
          this.handleRedirect('CheckEmailScreen');
        }
        this.setState({
          isButtonDisabled: false,
        });
      })
      .catch((error) => {
        console.log(error);

        let errorMessageArr = [...this.state.errorMessage];
        errorMessageArr.push(error.response.data.errors.message);

        this.setState({
          errorMessage: [...errorMessageArr],
          ShowModal: true,
          isButtonDisabled: false,
        });
      });
  };

  closeModal = () => {
    this.setState({
      ShowModal: false,
      errorMessage: [],
    });
  };
  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <View style={styles.container}>
          <ScrollView>
            <Image source={Images.logo} resizeMode="contain" style={styles.logoImage} />
            <Text style={styles.text}>Enter your email to retrieve lost password</Text>
            <Form style={styles.form}>
              <View style={styles.inputContainer}>
                <Label style={styles.TextLabel}>Email Address</Label>
                <Input
                  style={styles.TextInput}
                  placeholder="Email Address"
                  placeholderTextColor="#a7a7a7"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  onChangeText={(value) => this.setState({ email: value })}
                />
              </View>

              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={styles.btnPrimary}
                  onPress={() => this.making_api_call()}
                  activeOpacity={0.8}
                  disabled={this.state.isButtonDisabled}
                >
                  <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </Form>
            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => this.handleRedirect('LoginScreen')}
              activeOpacity={0.8}
            >
              <Text style={styles.btnSecondaryText}>Go back</Text>
            </TouchableOpacity>
          </ScrollView>
          {this.state.ShowModal ? (
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
