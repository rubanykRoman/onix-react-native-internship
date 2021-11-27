import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import styles from './DetailedProfileStyles';

const DetailedProfile = function ({ route, navigation }) {
  const { itemId, text } = route.params;
  return (
    <View style={styles.container}>
      <Text>DetailedProfile</Text>
      <Text>
        {`Id:${itemId} User name: ${text}`}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to MainPage"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile', {
            itemId,
            text,
          })}
        />
      </View>
    </View>
  );
};

DetailedProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  itemId: PropTypes.number,
  text: PropTypes.string,
};

DetailedProfile.defaultProps = {
  itemId: null,
  text: '',
};

export default DetailedProfile;
