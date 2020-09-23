import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import styles from './ProductListingScreenStyle';

class ProductListingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
        <ScrollView style={styles.container}>
          <MainHeading text={`Products List`} />
          {/* <Text style={styles.blogTitle}>Product list</Text> */}
        </ScrollView>
      </View>
    );
  }
}

export default ProductListingScreen;
