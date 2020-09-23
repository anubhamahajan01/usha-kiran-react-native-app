import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import styles from './BlogDetailScreenStyle';

class BlogDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="BlogListingScreen" />
        <ScrollView style={styles.container}>
          <Text style={styles.blogTitle}>
            Don't be afraid to give up the good to go for the great
          </Text>
          <Text style={styles.postedOn}>3 hours ago</Text>
          <View style={styles.blogBody}>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo coaute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamcitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duisore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Text>
            <Text style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitateu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BlogDetailScreen;
