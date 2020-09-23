import React from 'react';
import { Text } from 'react-native';
import styles from './MainHeadingStyle';

export default class MainHeading extends React.Component {
  render() {
    return <Text style={styles.heading}>{this.props.text}</Text>;
  }
}
