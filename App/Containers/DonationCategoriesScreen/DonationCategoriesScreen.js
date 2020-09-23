import React from 'react';
import { Form } from 'native-base';
import { connect } from 'react-redux';
import { Helpers } from 'App/Theme';
import { Config } from '../../Config/index';
import { View, ScrollView } from 'react-native';

import Loader from '../../Components/Loader/Loader';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import DonationCategory from './../../Components/DonationCategory/DonationCategory';

import styles from './DonationCategoriesScreenStyle';

const axios = require('axios');

class DonationCategoriesScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      renderCategories: false,
      donationCategoryArr: [],
      isLoadingEnabled: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  setCategory = (name) => {
    this.props.navigation.navigate('DonationDetailsScreen', { categoryName: name });
  };

  fetchCategories = () => {
    this.setState({
      isLoadingEnabled: true,
    });

    axios
      .get(`${Config.API_URL}/donations/categories`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token}`,
          },
        },
      })
      .then(
        (response) => {
          this.setState({
            donationCategoryArr: response.data.data,
            isLoadingEnabled: false,
          });
        },
        (error) => {
          console.log(error);
          console.log(error.response.data.errors.message);

          this.setState({
            isLoadingEnabled: false,
          });
        }
      );
  };

  render() {
    return this.state.isLoadingEnabled ? (
      <Loader />
    ) : (
      <>
        <View style={styles.outerContainer}>
          <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />

          <View style={styles.container}>
            <ScrollView>
              <View style={Helpers.center}>
                <MainHeading text="What would you like to donate?" />
                <Form>
                  <View style={styles.categoriesFlex}>
                    <DonationCategory
                      categoryArr={this.state.donationCategoryArr}
                      setCategory={this.setCategory}
                    />
                  </View>
                </Form>
              </View>
            </ScrollView>
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
)(DonationCategoriesScreen);
