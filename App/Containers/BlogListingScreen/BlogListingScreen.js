import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from '../../Components/AppHeader/AppHeader';
import MainHeading from '../../Components/MainHeading/MainHeading';
import BlogCard from '../../Components/BlogCard/BlogCard';
import styles from './BlogListingScreenStyle';

class BlogListingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.outerContainer}>
        <AppHeader leftIcon="backIcon" backScreen="DashboardScreen" />
        <ScrollView style={styles.container}>
          <MainHeading text={`Usha Kiran Blog`} />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </ScrollView>
      </View>
    );
  }
}

export default BlogListingScreen;
