import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Form } from 'native-base';
import Style from './SubjectSelectionScreenStyle';
import { Helpers } from 'App/Theme';

import AppHeader from '../../Components/AppHeader/AppHeader';
import Subjects from '../../Components/SubjectSelect/SubjectSelect';
import MainHeading from '../../Components/MainHeading/MainHeading';
import Loader from '../../Components/Loader/Loader';
import { connect } from 'react-redux';
import { Config } from '../../Config';
const axios = require('axios');

class SubjectSelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectSelected: [],
      subjectData: [],
      isLoadingEnabled: false,
      isBtnDisabled: true,
    };
  }

  componentDidMount() {
    this.fetchSubjects();
  }

  chooseSubjects = (value, isSelected) => {
    let subjectSelected = [...this.state.subjectSelected];
    if (isSelected) {
      subjectSelected.push(value);
    } else {
      subjectSelected = subjectSelected.filter((item) => item !== value);
    }
    this.setState({ subjectSelected: subjectSelected });
    this.enableButton();
  };

  fetchSubjects = () => {
    this.setState({
      isLoadingEnabled: true,
    });

    axios
      .get(`${Config.API_URL}/educate/subjects`, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token && this.props.token}`,
          },
        },
      })
      .then((response) => {
        this.setState({
          subjectData: response.data.data,
          isLoadingEnabled: false,
        });
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          isLoadingEnabled: false,
        });
      });
  };

  enableButton = () => {
    this.setState((prevState) => {
      let subjectsList = [...prevState.subjectSelected];
      if (subjectsList.length > 0) {
        return {
          isBtnDisabled: false,
        };
      } else {
        return {
          isBtnDisabled: true,
        };
      }
    });
  };

  render() {
    return this.state.isLoadingEnabled ? (
      <Loader />
    ) : (
      <View style={Style.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
        <ScrollView>
          <View style={Style.container}>
            <View style={Helpers.center}>
              <MainHeading text="Select subjects" />
              <Text style={Style.subHeading}>Choose all subjects that you want to teach.</Text>
              <Form>
                <View style={Style.categoriesFlex}>
                  {this.state.subjectData.map((item, index) => (
                    <Subjects
                      subjectName={item.text}
                      chooseSubjects={this.chooseSubjects}
                      id={item.id}
                      key={index}
                    />
                  ))}
                </View>
              </Form>
            </View>
            <View style={Style.btnView}>
              <TouchableOpacity
                style={[Style.btnPrimary, this.state.isBtnDisabled ? Style.disabledBtn : null]}
                onPress={this.handleSubjectSelect}
                activeOpacity={0.8}
                disabled={this.state.isBtnDisabled}
              >
                <Text style={Style.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  handleSubjectSelect = () => {
    this.props.navigation.navigate('ClassSelectScreen', { subjectArr: this.state.subjectSelected });
  };
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectSelectionScreen);
