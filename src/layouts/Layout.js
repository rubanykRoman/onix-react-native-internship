import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './layoutStyles';

const Layout = function ({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>My first React Native APP</Text>
      </View>
      {children}
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Prepared by Roman Rubanyk</Text>
      </View>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
