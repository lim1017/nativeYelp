import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


const ResultDetail =({data})=>{



  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Image style={styles.image} source={{uri:data.image_url}}/>
      <Text>{data.rating} <AntDesign name="star" size={12} color="gold" /> Stars, {data.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    width:200,
    height:130,
    borderRadius:10,
    marginBottom: 5
  },
  name:{
    fontWeight:'bold',
  },
  container:{
    marginLeft:15,
  }
})
export default ResultDetail;