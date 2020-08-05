import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';


const navigator = createStackNavigator({
    Search:SearchScreen,
    ResultDetail: ResultDetailScreen
},{
  initialRouteName:"Search",
  defaultNavigationOptions:{
    title:"Search Restaurents"
  }
})

export default createAppContainer(navigator);