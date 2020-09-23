import React from 'react';

import { Images } from 'App/Theme';
import { connect } from 'react-redux';
import { Config } from '../../Config';
import { Form, Input, Label, Textarea } from 'native-base';
import { storeToken, userNameStore } from './../../Actions/Actions';
import { Text, View, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native';

import ErrorModal from '../../Components/ErrorModal/ErrorModal';

import Style from './SignupScreenStyle';

const axios = require('axios');
class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      mobile: '',
      email: '',
      address: '',
      errorMessage: [],
      ShowModal: false,
      isButtonDisabled: false,
    };
  }

  handleValidation = () => {
    const { username, password, mobile, email, address } = this.state;
    let phoneno = /^[0-9]{10}$/;
    let name = /^[a-zA-Z ]*$/;
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    let errorMessageArr = [];

    if (username === '') {
      errorMessageArr.push('Please Enter Name');
    }
    if (username.length != 0 && username.length <= 2) {
      errorMessageArr.push('Name Must be Atleast 3 Characters');
    }
    if (username.length != 0 && username.length > 50) {
      errorMessageArr.push('Name Must not be Exceeded 50 Characters');
    }

    if (username.length != 0 && !username.match(name)) {
      errorMessageArr.push('Please Enter Valid Name');
    }
    if (mobile === '') {
      errorMessageArr.push('Please Enter Mobile Number');
    }
    if (mobile.length != 0 && !mobile.match(phoneno)) {
      errorMessageArr.push('Mobile Number Digits Should be 10');
    }
    if (email === '') {
      errorMessageArr.push('Please Enter Email-ID');
    }

    if (email.length != 0 && !email.match(pattern)) {
      errorMessageArr.push('Please Enter Valid Email-ID');
    }

    if (password.length === 0) {
      errorMessageArr.push('Please Enter Password');
    }
    if (password.length != 0 && password.length < 6) {
      errorMessageArr.push('Password Must be Minimum 6 Characters ');
    }
    if (address === '') {
      errorMessageArr.push('Please Enter Address');
    }
    if (address.length != 0 && address.length <= 6) {
      errorMessageArr.push('Address Must be Atleast 6 Characters');
    }
    if (address.length != 0 && address.length > 250) {
      errorMessageArr.push('Address must not be more than 250 Characters');
    }
    if (errorMessageArr.length != 0) {
      this.setState((state) => ({
        ...state,
        errorMessage: [...errorMessageArr],
        ShowModal: true,
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
      this.fetchSignUp();
      //this.onSignup('DashboardScreen');
    }
  };

  fetchSignUp = () => {
    let payload = {
      name: this.state.username,
      phone: this.state.mobile,
      email: this.state.email,
      address: this.state.address,
      password: this.state.password,
    };
    axios
      .post(`${Config.API_URL}/register`, payload)
      .then((response) => {
        this.props.storeToken(response.data.data.token);
        this.props.userNameStore(response.data.data.name);

        this.onSignup('DashboardScreen');

        this.setState({
          isButtonDisabled: false,
        });
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors.email);

        let errorMessageArr = [...this.state.errorMessage];

        if (error.response.data.errors.email) {
          errorMessageArr.push(error.response.data.errors.email);
        }

        if (error.response.data.errors.phone) {
          errorMessageArr.push(error.response.data.errors.phone);
        }

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
      password: '',
      errorMessage: [],
    });
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <ScrollView>
          <View style={Style.container}>
            <Image source={Images.logo} resizeMode="contain" style={Style.logoImage} />
            <Form>
              <View style={Style.inputContainer}>
                <Label style={Style.TextLabel}>
                  Name <Label style={{ color: 'red' }}>*</Label>
                </Label>
                <Input
                  style={Style.TextInput}
                  value={this.state.username}
                  placeholder="Name"
                  placeholderTextColor="#a7a7a7"
                  onChangeText={(value) => this.setState({ username: value })}
                />
              </View>
              <View style={Style.inputContainer}>
                <Label style={Style.TextLabel}>
                  {' '}
                  Mobile Number<Label style={{ color: 'red' }}>*</Label>
                </Label>
                <Input
                  style={Style.TextInput}
                  value={this.state.mobile}
                  placeholder="Mobile Number"
                  placeholderTextColor="#a7a7a7"
                  keyboardType="number-pad"
                  onChangeText={(value) => this.setState({ mobile: value })}
                />
              </View>
              <View style={Style.inputContainer}>
                <Label style={Style.TextLabel}>
                  {' '}
                  Email Address<Label style={{ color: 'red' }}>*</Label>
                </Label>
                <Input
                  style={Style.TextInput}
                  value={this.state.email}
                  placeholder="Email Address"
                  placeholderTextColor="#a7a7a7"
                  keyboardType="email-address"
                  onChangeText={(value) => this.setState({ email: value })}
                />
              </View>
              <View style={Style.inputContainer}>
                <Label style={[Style.TextLabel, { paddingLeft: 10 }]}>
                  Password<Label style={{ color: 'red' }}>*</Label>
                </Label>
                <Input
                  style={Style.TextInput}
                  value={this.state.password}
                  placeholder="Password"
                  placeholderTextColor="#a7a7a7"
                  secureTextEntry={true}
                  onChangeText={(value) => this.setState({ password: value })}
                />
              </View>
              <View style={Style.inputContainer}>
                <Label style={[Style.TextLabel, { paddingLeft: 10 }]}>
                  Address<Label style={{ color: 'red' }}>*</Label>
                </Label>
                <Textarea
                  rowSpan={4}
                  value={this.state.address}
                  placeholder="Address.."
                  style={Style.TextInput}
                  placeholderTextColor="#a7a7a7"
                  onChangeText={(value) => this.setState({ address: value })}
                />
              </View>
              {/* <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text> */}
              <View style={Style.inputContainer}>
                <TouchableOpacity
                  style={Style.btnPrimary}
                  activeOpacity={0.8}
                  onPress={() => this.making_api_call()}
                  disabled={this.state.isButtonDisabled}
                >
                  <Text style={Style.btnText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </Form>
            <TouchableOpacity
              style={Style.btnSecondary}
              onPress={() => this.onSignup('LoginScreen')}
              activeOpacity={0.8}
            >
              <Text style={Style.btnSecondaryText}>Go back</Text>
            </TouchableOpacity>
            {this.state.ShowModal ? (
              <ErrorModal errorMessage={this.state.errorMessage} closeModal={this.closeModal} />
            ) : null}
          </View>
        </ScrollView>
      </>
    );
  }

  onSignup = (screenName) => {
    this.props.navigation.navigate(screenName);
  };
}

const mapStateToProps = (state) => ({
  // token: state.auth.token,
});
const mapDispatchToProps = {
  storeToken,
  userNameStore,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);
