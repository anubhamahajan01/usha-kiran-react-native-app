import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Style from './subjectSelectStyle';

export default class SubjectSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  activateSubject = (id) => {
    this.setState(
      {
        isActive: !this.state.isActive,
      },
      () => {
        this.props.chooseSubjects(id, this.state.isActive);
      }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={[Style.btnSubjects, this.state.isActive ? Style.activeSubject : null]}
        onPress={() => this.activateSubject(this.props.id)}
        activeOpacity={0.8}
      >
        <Text style={this.state.isActive ? Style.activeText : Style.btnSubjectsText}>
          {this.props.subjectName}
        </Text>
      </TouchableOpacity>
    );
  }
}
