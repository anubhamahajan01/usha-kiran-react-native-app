import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './NotificationStyle';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import NotificationCard from '../../Components/NotificationCard/NotificationCard';

export default class NotificationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <AppHeader leftIcon="hamburger" />
        <View style={Style.container}>
          <MainHeading text="Notifications" />
          <NotificationCard />
        </View>
      </View>
    );
  }
}
