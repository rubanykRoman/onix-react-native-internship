import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  TextInput,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './mainPageStyles';
import TextRow from '../../components/TextRow/TextRow';

const MainPage = function ({ navigation }) {
  const [text, onChangeText] = React.useState('');
  const params = {
    itemId: 13,
    text,
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TextRow text={text}>The greatest developer: </TextRow>
          <TextRow text={text}>The greatest sportsman: </TextRow>
          <TextRow text={text}>The greatest showman: </TextRow>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            style={styles.textInput}
            placeholder="enter your name"
            blurOnSubmit={false}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Go to Profile"
              onPress={() => navigation.navigate('Profile', params)}
            />
            <Button
              title="Go to Detailed Profile"
              onPress={() => navigation.navigate('DetailedProfile', params)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

MainPage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default MainPage;
