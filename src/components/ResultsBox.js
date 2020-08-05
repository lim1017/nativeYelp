import React from "react";
import { withNavigation } from 'react-navigation'
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ResultDetail from "./ResultDetail";

const ResultsBox = (props) => {
  const { header, results, navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        horizontal
        keyExtractor={(key) => key.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ResultDetail", {id: item.id})}
            >
              <ResultDetail data={item} />
            </TouchableOpacity>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 15,
  },
  container: {
    marginBottom: 10,
  },
});
export default withNavigation(ResultsBox);
