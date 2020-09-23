import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StatusBar } from 'react-native';
import { Header } from 'native-base';
import { withNavigation } from 'react-navigation';
import Style from './headerStyle';
import LogoutModal from '../Logout/LogoutModal';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  showLogoutModal = (visible) => {
    this.setState({
      showModal: visible,
    });
  };

  hideLogoutModal = () => {
    this.setState({
      showModal: false,
    });
  };
  render() {
    return (
      <View>
        <Header style={Style.Container}>
          <StatusBar backgroundColor="#141414" barStyle="light-content" />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ alignItems: 'center' }}
            onPress={
              this.props.leftIcon == 'backIcon'
                ? () => this.handleRedirect(this.props.backScreen)
                : () => this.showLogoutModal(true)
            }
          >
            <Image
              source={
                this.props.leftIcon === 'hamburger'
                  ? require('../../Assets/Images/menu.png')
                  : require('../../Assets/Images/Back.png')
              }
              style={[Style.headerIcon, Style.backIcon]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.handleRedirect('DashboardScreen')}
            activeOpacity={0.8}
          >
            <Image source={require('../../Assets/Images/logo_usha.png')} style={Style.headerLogo} />
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => this.handleRedirect('NotificationScreen')}
            activeOpacity={0.8}
          >
            <Image source={require('../../Assets/Images/Bell.png')} style={Style.headerIcon} />
          </TouchableOpacity> */}
        </Header>
        {this.state.showModal && <LogoutModal closeModal={this.hideLogoutModal} />}
      </View>
    );
  }

  handleRedirect = (screenName) => {
    this.props.navigation.navigate(screenName);
  };
}

export default withNavigation(AppHeader);
