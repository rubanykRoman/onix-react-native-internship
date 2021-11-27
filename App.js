import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/screens/MainPage/MainPage';
import Layout from './src/layouts/Layout';
import Profile from './src/screens/Profile/Profile';
import DetailedProfile from './src/screens/DetailedProfile/DetailedProfile';

const Stack = createNativeStackNavigator();

const App = function () {
  return (
    <NavigationContainer>
      <Layout>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={MainPage} options={{ title: 'Main page' }} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="DetailedProfile" component={DetailedProfile} options={{ title: 'Detailed Profile' }} />
        </Stack.Navigator>
      </Layout>
    </NavigationContainer>
  );
};

export default App;
