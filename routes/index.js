import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Dimensions } from 'react-native';
const height = Dimensions.get('window').height;

import Login from '../src/screens/Login';
import Songs from '../src/screens/Songs';
import PlayList from '../src/screens/Playlist';
import Account from '../src/screens/Account';
import { createStackNavigator } from 'react-navigation-stack';

Icon.loadFont();

const tabNavigation = createBottomTabNavigator({
  Songs: {
    screen: Songs,
    navigationOptions: {
      headerShown: true,
      tabBarLabel: 'Songs',

      tabBarOptions: {
        activeTintColor: '#009900',
      },
      tabBarIcon: ({ color, focused }) => (
        <Icon name="home" color={color} size={height * 0.02} color={focused ? '#009900' : 'gray'}
        />),
    }
  },
  PlayList: {
    screen: PlayList,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#009900',
      },
      tabBarLabel: 'Playlist',
      tabBarIcon: ({ color, focused }) => (
        <Icon name="rocket" color={color} size={height * 0.02} color={focused ? '#009900' : 'gray'}
        />),

    }
  },
  Account:
  {
    screen: Account,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#009900',
      },
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, focused }) => (
        <Icon name="clipboard" color={color} size={height * 0.02} color={focused ? '#009900' : 'gray'}
        />),
    }
  },
});

const stackNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  stack: {
    screen: tabNavigation,
    navigationOptions: {
      headerShown: false,
      
    },
  },
});

export default createAppContainer(stackNavigation);