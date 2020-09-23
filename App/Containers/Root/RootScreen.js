import React, { Component } from 'react';

import { View } from 'react-native';
import { Helpers } from 'App/Theme';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import AppNavigator from 'App/Navigators/AppNavigator';
import NavigationService from 'App/Services/NavigationService';

class RootScreen extends Component {
  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

RootScreen.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
