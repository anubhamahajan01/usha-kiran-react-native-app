import React from 'react';
import { connect } from 'react-redux';
import { Config } from '../../Config';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';

import AppHeader from '../../Components/AppHeader/AppHeader';
import ClassSelection from '../../Components/classSelect/classSelect';
import MainHeading from '../../Components/MainHeading/MainHeading';
import ErrorModal from '../../Components/ErrorModal/ErrorModal';
import Style from './ClassSelectStyle';

const axios = require('axios');

class ClassSelectScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classData: [
        { classLabel: 'I', classValue: '1' },
        { classLabel: 'II', classValue: '2' },
        { classLabel: 'III', classValue: '3' },
        { classLabel: 'IV', classValue: '4' },
        { classLabel: 'V', classValue: '5' },
        { classLabel: 'VI', classValue: '6' },
        { classLabel: 'VII', classValue: '7' },
        { classLabel: 'VIII', classValue: '8' },
        { classLabel: 'IX', classValue: '9' },
        { classLabel: 'X', classValue: '10' },
        { classLabel: 'XI', classValue: '11' },
        { classLabel: 'XII', classValue: '12' },
      ],
      selectedClasses: [],
      isBtnDisabled: true,
      showErrorModal: false,
      errorMessage: [],
    };
  }

  handleClassSelection = (checkBoxValue, isSelected) => {
    this.setState((prevState) => {
      let selectedClassesArr = [...prevState.selectedClasses];
      if (isSelected) {
        selectedClassesArr.push(checkBoxValue);
      } else {
        selectedClassesArr = selectedClassesArr.filter((item) => item !== checkBoxValue);
      }
      return {
        selectedClasses: selectedClassesArr,
      };
    });
    this.enableButton();
  };

  enableButton = () => {
    this.setState((prevState) => {
      let classesList = [...prevState.selectedClasses];
      if (classesList.length > 0) {
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

  selectClass = () => {
    this.setState(
      {
        isBtnDisabled: true,
      },
      () => {
        this.educate();
      }
    );
  };

  educate = () => {
    let itemDetails = {
      class: this.state.selectedClasses,
      subject: this.props.navigation.getParam('subjectArr'),
    };

    axios
      .post(`${Config.API_URL}/educate/request`, itemDetails, {
        headers: {
          common: {
            Authorization: `Bearer ${this.props.token}`,
          },
        },
      })
      .then((response) => {
        this.setState(
          {
            isBtnDisabled: false,
          },
          () => {
            this.props.navigation.navigate('RequestSuccessScreen');
          }
        );
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data.errors.message);

        let errorMessageArr = [...this.state.errorMessage];
        errorMessageArr.push(error.response.data.errors.message);

        this.setState({
          errorMessage: [...errorMessageArr],
          showErrorModal: true,
          isBtnDisabled: false,
        });
      });
  };

  closeModal = () => {
    this.setState({
      errorMessage: [],
      showErrorModal: false,
    });
  };

  render() {
    return (
      <View>
        <AppHeader leftIcon="backIcon" backScreen="SubjectSelectionScreen" />
        <ScrollView>
          <View style={Style.container}>
            <MainHeading text="Select Class" />

            <View style={Style.checkboxContainer}>
              {this.state.classData.map((classSelect, index) => {
                return (
                  <ClassSelection
                    key={index}
                    name={classSelect.classLabel}
                    value={classSelect.classValue}
                    handleSelectCheckbox={this.handleClassSelection}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>

        <View style={Style.btnView}>
          <TouchableOpacity
            style={[Style.btnPrimary, this.state.isBtnDisabled ? Style.disabledBtn : null]}
            onPress={() => this.selectClass()}
            activeOpacity={0.8}
            disabled={this.state.isBtnDisabled}
          >
            <Text style={Style.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
        {this.state.showErrorModal ? (
          <ErrorModal errorMessage={this.state.errorMessage} closeModal={this.closeModal} />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassSelectScreen);
