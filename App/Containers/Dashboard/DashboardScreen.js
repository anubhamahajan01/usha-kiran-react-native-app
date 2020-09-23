import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import { connect } from 'react-redux';
import Style from './DashboardScreenStyle';

class DashboardScreen extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#141414" barStyle="light-content" />
        <View>
          <AppHeader leftIcon="hamburger" />
          <View style={Style.container}>
            <View style={Style.headingWrapper}>
              <MainHeading text={`Welcome ${this.props.username}`} />
            </View>
            <TouchableOpacity
              style={[Style.btn, Style.btnGreen]}
              onPress={() => this.handleRedirect('DonationCategoriesScreen')}
              activeOpacity={0.8}
            >
              <Image
                source={require('../../Assets/Images/donate-white.png')}
                style={Style.dashboardImg}
              />
              <Text style={Style.btnText}>Donate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.btn, Style.btnOrange]}
              onPress={() => this.handleRedirect('SubjectSelectionScreen')}
              activeOpacity={0.8}
            >
              <Image
                source={require('../../Assets/Images/educate-white.png')}
                style={Style.dashboardImg}
              />
              <Text style={Style.btnText}>Educate</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={[Style.btn, Style.btnGreen]}
              onPress={() => this.handleRedirect('BlogListingScreen')}
              activeOpacity={0.8}
            >
              <Image
                source={require('../../Assets/Images/news-white.png')}
                style={Style.dashboardImg}
              />
              <Text style={Style.btnText}>News</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity
              style={[Style.btn, Style.btnOrange]}
              onPress={() => this.handleRedirect('ProductListingScreen')}
              activeOpacity={0.8}
            >
              <Image
                source={require('../../Assets/Images/shop-white.png')}
                style={Style.dashboardImg}
              />
              <Text style={Style.btnText}>Products</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </>
    );
  }

  handleRedirect = (location) => {
    this.props.navigation.navigate(location);
  };
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  // token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardScreen);
