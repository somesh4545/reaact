import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import DrawerNavigation from './src/screens/DrawerNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavi = () => {
  // navigation.setOptions({
  //   headerTextAlign: 'left',
  //   headerTitle: () => <HomeTopBar />,
  //   headerLeft: false,
  // });
  return (
    <Drawer.Navigator drawerContent={props => <DrawerNavigation {...props} />}>
      <Drawer.Screen
        options={{headerShown: true}}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={DrawerNavi}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
