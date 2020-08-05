import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';



const SearchScreen =()=>{

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <View>
      <SearchBar searchTerm={searchTerm} setSearchTerm={(newTerm)=>setSearchTerm(newTerm)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})
export default SearchScreen;