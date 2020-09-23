import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './classSelectStyle';

export default class ClassSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedState: false,
    };
  }

  handleCheckBoxSelection = (currentCheckValue) => {
    this.setState(
      (state) => ({
        ...state,
        checkedState: !state.checkedState,
      }),
      () => {
        this.props.handleSelectCheckbox(currentCheckValue, this.state.checkedState);
      }
    );
  };

  render() {
    const { value } = this.props;

    return (
      <View style={styles.checkboxContainerStyle}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.checkboxPrimary,
            this.state.checkedState ? styles.checkboxActiveFill : null,
          ]}
          onPress={() => this.handleCheckBoxSelection(value)}
        >
          <Text
            style={[
              styles.checkboxLabel,
              this.state.checkedState ? styles.activeCheckboxLabel : null,
            ]}
          >
            {this.props.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
