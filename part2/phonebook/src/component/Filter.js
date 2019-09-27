import React, { Fragment } from "react";

const Filter = ({ persons, setFilteredName }) => {
  const handleInputChange = event => {
    setFilteredName(
      persons.filter(element =>
        element.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <Fragment>
      filter shown with <input onChange={handleInputChange} />
    </Fragment>
  );
};

export default Filter;
