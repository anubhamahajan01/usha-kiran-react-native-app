import React from 'react';
import { View, Text } from 'react-native';

export default class SelectClassScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
      </View>
    );
  }
}
