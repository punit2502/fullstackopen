import React, { useState, Fragment } from "react";

import personService from "../services/person";

const PersonForm = ({ persons, setPersons, setMessage, setMessageType }) => {
  const [{ name, number }, setNameNum] = useState({ name: "", number: "" });

  const handleInputChange = event => {
    const { id, value } = event.target;
    setNameNum(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmitClick = event => {
    event.preventDefault();
    const isNotDuplicate =
      persons.filter(element => element.name === name).length === 0;

    if (isNotDuplicate) {
      personService
        .createPerson({ name, number })
        .then(({ id, name, number }) => {
          // on successfull, add new person to list
          setPersons(prevState => [{ id, name, number }, ...prevState]);
          // replace name and number filed with empty values for new submission
          setNameNum({ name: "", number: "" });
          setMessageType("success");
          setMessage(`Added ${name}`);
        });
    } else {
      const person = persons.filter(element => element.name === name)[0];
      if (person.number === number)
        alert(`${name} is already added to phonebook`);
      else {
        if (
          window.confirm(
            `${person.name} is already added to phonebook, replace the old number with new one`
          )
        ) {
          personService
            .updatePerson(person.id, {
              id: person.id,
              name,
              number,
            })
            .then(person => {
              setPersons(prevState => [
                { id: person.id, name, number },
                ...prevState.filter(element => element.id !== person.id),
              ]);
              setMessageType("success");
              setMessage(`Updated ${person.name}`);
            });
        }
      }
    }
  };

  return (
    <Fragment>
      <h2>add a new</h2>
      <form onSubmit={handleSubmitClick}>
        <div>
          name:{" "}
          <input id="name" value={name} onChange={handleInputChange} required />
          <br />
          number:{" "}
          <input
            id="number"
            value={number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </Fragment>
  );
};

export default PersonForm;
