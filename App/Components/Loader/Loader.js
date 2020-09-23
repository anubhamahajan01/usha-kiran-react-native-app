import React from 'react';
import styles from './LoaderStyle';
import { View, ActivityIndicator, Modal } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#eb7a00" />
    </View>
  );
};

export default Loader;
