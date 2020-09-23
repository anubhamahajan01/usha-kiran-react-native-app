import React from 'react';
import { connect } from 'react-redux';
import { Config } from '../../Config';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Form, Label, Textarea } from 'native-base';

import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import styles from './DonationDetailsScreenStyle';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import Loader from '../../Components/Loader/Loader';

const axios = require('axios');

class DonationDetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: '',
      heading: '',
      tooltip: '',
      errorMessage: [],
      ShowModal: false,
      isButtonDisabled: false,
      isLoadingEnabled: false,
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  fetchCategory = () => {
    this.setState({
      isLoadingEnabled: true,
    });
    axios
      .get(
        `${Config.API_URL}/donations/categories/${this.props.navigation.getParam('categoryName')}`,
        {
          headers: {
            common: {
              Authorization: `Bearer ${this.props.token}`,
            },
          },
        }
      )
      .then(
        (response) => {
          this.setState({
            heading: response.data.data.text,
            tooltip: response.data.data.tooltip,
            isLoadingEnabled: false,
          });
        },
        (error) => {
          console.log(error);
          this.setState({
            isLoadingEnabled: false,
          });
        }
      );
  };

  handleValidation = () => {
    const { details } = this.state;
    let name = /^[a-zA-Z ]*$/;
    let errorMessageArr = [];

    if (details === '') {
      errorMessageArr.push('Please Enter Details');
    }
    if (details.length != 0 && details.length < 6) {
      errorMessageArr.push('Details Must be Atleast 6 Characters');
    }
    if (details.length != 0 && details.length > 250) {
      errorMessageArr.push('Details must not be more than 250 Characters');
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

  donate = () => {
    let itemDetails = {
      donation_category_id: this.props.navigation.getParam('categoryName'),
      details: this.state.details,
    };
    axios
      .post(`${Config.API_URL}/donations`, itemDetails, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token}`,
          },
        },
      })
      .then((response) => {
        this.setState(
          {
            isButtonDisabled: false,
          },
          () => {
            this.handleRedirect('RequestSuccessScreen');
          }
        );
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isButtonDisabled: false,
        });
      });
  };

  render() {
    return this.state.isLoadingEnabled ? (
      <Loader />
    ) : (
      <View style={styles.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="DonationCategoriesScreen" />
        <View style={styles.container}>
          <ScrollView>
            <MainHeading text={`${this.state.heading} Details`} />
            <Form>
              <View style={styles.inputContainer}>
                <Label style={styles.TextLabel}>Enter Details Here</Label>
                <Textarea
                  style={styles.TextArea}
                  value={this.state.details}
                  rowSpan={5}
                  placeholder="Details"
                  placeholderTextColor="#c5c5c5"
                  onChangeText={(value) => this.setState({ details: value })}
                />
                <Text style={styles.tooltip}> {this.state.tooltip}</Text>
              </View>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={styles.btnPrimary}
                  onPress={() => this.making_api_call()}
                  activeOpacity={0.8}
                  disabled={this.state.isButtonDisabled}
                >
                  <Text style={styles.btnText}>Submit Details</Text>
                </TouchableOpacity>
              </View>
            </Form>
          </ScrollView>
        </View>
        {this.state.ShowModal ? (
          <ErrorModal errorMessage={this.state.errorMessage} closeModal={this.closeModal} />
        ) : null}
      </View>
    );
  }

  handleRedirect = (screenName) => {
    this.props.navigation.navigate(screenName);
  };

  closeModal = () => {
    this.setState({
      ShowModal: false,
      errorMessage: [],
    });
  };

  making_api_call = () => {
    this.setState(
      {
        isButtonDisabled: true,
      },
      () => {
        if (this.handleValidation()) {
          // alert('login succesfully');
          this.donate();
        }
      }
    );
  };
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationDetailsScreen);
