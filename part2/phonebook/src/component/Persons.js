import React, { Fragment } from "react";
import personService from "../services/person";

const Persons = ({
  persons,
  filterdName,
  setPersons,
  setMessage,
  setMessageType,
}) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`))
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(element => element.id !== id));
          setMessageType("success");
          setMessage(`Deleted ${name}`);
        })
        .catch(error => {
          setMessageType("error");
          setMessage(
            `Information of ${name} has already been removed from server`
          );
        });
  };

  return (
    <Fragment>
      <h2>Numbers</h2>
      {(filterdName || persons).map(({ id, name, number }) => (
        <div key={id}>
          {name} {number}{" "}
          <button onClick={() => handleDelete(id, name)}>delete</button>
        </div>
      ))}
    </Fragment>
  );
};

export default Persons;
