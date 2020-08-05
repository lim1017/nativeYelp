import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default (searchType) => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSearch = async (term) => {
    setErrorMsg("");

    try {
      if (searchType === "search") {
        const response = await yelp.get(`/${searchType}`, {
          params: {
            term: term,
            location: "toronto",
            limit: 50,
          },
        });
        setResults(response.data.businesses);
      } else {
        const response = await yelp.get(`/${searchType}`);
        setResults(response.data);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  };

  useEffect(() => {
    handleSearch("Tacos");
  }, []);

  return [handleSearch, results, errorMsg];
};
