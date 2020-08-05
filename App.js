import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { StyleSheet, Text, View } from 'react-native';
import Search from './src/screens/SearchScreen';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
    Search:SearchScreen
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
    title:"Search Restaurents"
  }
})

export default createAppContainer(navigator);