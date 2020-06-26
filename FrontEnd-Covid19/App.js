import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

import Home from './components/Home';
import signin from './components/Signin';
import myGPS from './components/myGPS';

const myTab = createMaterialBottomTabNavigator();
const myStack = createStackNavigator();

const StackNavigator = () => (<myStack.Navigator>
  <myStack.Screen name="HOME" component={Home} options={{ title: 'Home page' }} />
  <myStack.Screen name="MY_GPS" component={myGPS} options={{ title: 'GPS & Volunteers ' }} />
</myStack.Navigator>)

export default function App() {
  return (
    <NavigationContainer>
      <myTab.Navigator initialRouteName='HOME'>
        <myTab.Screen
          name='User'
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="login" color={color} size={26} />
          }}
        />
        <myTab.Screen
          name='New User'
          component={signin}
          options={{
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-plus" color={color} size={26}   />
          }}
        />
      </myTab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    paddingTop: 50
  },

});

