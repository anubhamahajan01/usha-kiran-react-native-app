import React from 'react';
import { Text, View } from 'react-native';
import Style from './NotificationCardStyle';

export default class NotificationCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={Style.notificationCard}>
        <Text style={Style.cardTitle}>4 hours ago</Text>
        <Text style={Style.notyText}>
          UshaKiran would like volunteer for English class for Class V children
        </Text>
      </View>
    );
  }
}
