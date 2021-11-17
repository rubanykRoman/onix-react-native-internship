import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import layoutStyles from './layoutStyles';

const Layout = function ({ children }) {
  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.header}>
        <Text style={layoutStyles.textHeader}>My first React Native APP</Text>
      </View>
      {children}
      <View style={layoutStyles.footer}>
        <Text style={layoutStyles.textFooter}>Prepared by Roman Rubanyk</Text>
      </View>
    </View>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
