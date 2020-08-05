import React from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const SearchBar =()=>{

  return (
    <View style={styles.container}>

      <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} /> 
      <TextInput
        style={styles.input}
        placeholder="Search"
      > 
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F0EEEE',
    borderRadius: 10,
    height: 50,
    marginHorizontal:10,
    flexDirection:'row',
    marginTop:10
  },
  searchIcon:{
    alignSelf:'center'
  },
  input:{
    fontSize:18,
    marginLeft:10,
    flex:1
  }
})
export default SearchBar;