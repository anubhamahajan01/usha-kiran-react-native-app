import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './BlogCardStyle';

class BlogCard extends React.Component {
  render() {
    return (
      <View style={styles.blogCard}>
        <Text style={styles.title}>Usha Kiran Featured Blog Title</Text>
        <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam...
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.time}>3 hours ago</Text>
          <TouchableOpacity
            style={styles.readMoreBtn}
            activeOpacity={0.8}
            onPress={() => this.handleRedirect('BlogDetailScreen')}
          >
            <Text style={styles.readMoreBtnText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleRedirect = (screenname) => {
    this.props.navigation.navigate(screenname);
  };
}

export default withNavigation(BlogCard);
