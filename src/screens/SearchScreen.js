import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsBox from "../components/ResultsBox";

const SearchScreen = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [handleSearch, results, errorMsg] = useResults('search');
 
  const filterByPrice = (priceRange) => {
    return results.filter((restaurent) => {
      return restaurent.price === priceRange;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={(newTerm) => setSearchTerm(newTerm)}
        onSearchSubmit={() => handleSearch(searchTerm)}
      />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      {/* <Text>Found! {results.length} results</Text> */}

      <ScrollView > 
        <ResultsBox results={filterByPrice("$")} header="Cheap Eats" />
        <ResultsBox results={filterByPrice("$$")} header="Still Value" />
        <ResultsBox results={filterByPrice("$$$")} header="Fancy Feast" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
export default SearchScreen;
