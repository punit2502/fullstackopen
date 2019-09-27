import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./component/SearchInput";
import CountriesList from "./component/CountriesList";
import IndividualListing from "./component/IndividualListing";

const App = () => {
  // Data that we get from json-server
  const [data, setData] = useState([]);
  // list of array when after user changes text in input field
  const [filteredList, setFilteredList] = useState([]);
  // true if show is clicked otherwise false
  const [showClicked, setShowClicked] = useState(false);
  // after show is clicked, data of that country is stored here. I know I need to write better names. lol
  const [showClickedData, setShowClickedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <SearchInput data={data} setFilteredList={setFilteredList} />
      {filteredList.length === 1 ? (
        <IndividualListing data={filteredList[0]} />
      ) : showClicked ? (
        <IndividualListing data={showClickedData} />
      ) : (
        <CountriesList
          data={data}
          filteredList={filteredList}
          setShowClicked={setShowClicked}
          setShowClickedData={setShowClickedData}
        />
      )}
    </div>
  );
};

export default App;
