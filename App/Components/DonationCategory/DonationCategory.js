import React from 'react';
import { Text, Image, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './DonationCategoryStyle';

class DonationCategory extends React.Component {
  render() {
    return (
      <>
        {this.props.categoryArr.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.categoryContainer}
              onPress={() => this.handleDonationKeypress(item.id)}
              key={index}
              activeOpacity={0.8}
            >
              <Image
                style={styles.imageDonation}
                source={{
                  uri: item.icon,
                }}
                // source={item.icon}
                resizeMode="contain"
              />
              <Text style={styles.categoryText}>{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </>
    );
  }

  handleDonationKeypress = (name) => {
    this.props.setCategory(name);
    this.props.navigation.navigate('DonationDetailsScreen');
  };
}

export default withNavigation(DonationCategory);
