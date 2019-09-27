import React from "react";

const CountriesList = ({
  filteredList,
  setShowClicked,
  setShowClickedData,
}) => {
  if (filteredList.length > 10)
    return <p>Too many matches, specify another filter</p>;
  return (
    <ul>
      {filteredList.map((element, index) => (
        <li key={index}>
          {element.name}{" "}
          <button
            onClick={e => {
              setShowClickedData(element);
              setShowClicked(true);
            }}
          >
            Show
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
