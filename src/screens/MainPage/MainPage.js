import React from 'react';
import {
  SafeAreaView, ScrollView, TextInput, View
} from 'react-native';
import styles from './mainPageStyles';
import TextRow from '../../components/TextRow/TextRow';

const MainPage = function () {
  const [text, onChangeText] = React.useState('');
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainPage;
