import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';
import styles from './ProfileStyles';

const Profile = function ({ route, navigation }) {
  const { itemId, text } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          User Name: 
          {' '}
          {text}
        </Text>
        <Text style={styles.text}>
          ItemId: 
          {' '}
          { JSON.stringify(itemId)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to MainPage"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Go to Detailed Profile"
          onPress={() => navigation.navigate('DetailedProfile', {
            itemId,
            text,
          })}
        />
      </View>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  itemId: PropTypes.number,
  text: PropTypes.string,
};

Profile.defaultProps = {
  itemId: null,
  text: '',
};

export default Profile;
