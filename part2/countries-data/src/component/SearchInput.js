import React from "react";

const SearchInput = ({ data, setFilteredList }) => {
  return (
    <div>
      find countries{" "}
      <input
        onChange={event =>
          setFilteredList(
            data.filter(element =>
              element.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            )
          )
        }
      />
    </div>
  );
};

export default SearchInput;
