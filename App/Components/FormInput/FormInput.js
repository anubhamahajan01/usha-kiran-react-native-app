import React from 'react';
import { View } from 'react-native';
import { Input, Label } from 'native-base';
import styles from './FormInputStyle';

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }
  render() {
    return (
      <View style={styles.inputContainer}>
        <Label style={styles.TextLabel}>Email Address</Label>
        <Input
          style={
            this.state.isFocused
              ? { fontStyle: 'normal', color: 'black' }
              : { fontStyle: 'italic', color: 'red', backgroundColor: 'green' }
          }
          placeholder="Email Address"
          placeholderTextColor="#a7a7a7"
          textContentType="emailAddress"
          keyboardType="email-address"
          onBlur={() => this.setState({ isFocused: false })}
          onFocus={() => this.setState({ isFocused: true })}
        />
      </View>
    );
  }
}
