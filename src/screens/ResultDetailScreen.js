import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'

const ResultDetailScreen = ({navigation}) => {
  const id=navigation.getParam('id')
  console.log(id)
  const [handleSearch, results, errorMsg] = useResults(id);

  return (
    <>
      <Text>{results.name}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
export default ResultDetailScreen;
