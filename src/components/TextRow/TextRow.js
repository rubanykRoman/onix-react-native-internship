import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import textRowStyles from './textRowStyles';

const TextRow = function ({ children, text }) {
  return (
    <Text style={textRowStyles.text}>
      {children}
      <Text style={textRowStyles.textGold}>{text}</Text>
    </Text>
  );
};

TextRow.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextRow;
