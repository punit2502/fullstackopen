import React, { useState, useEffect } from "react";
import Message from "./component/Message";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";

import personService from "./services/person";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterdName, setFilteredName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(undefined);

  useEffect(() => {
    personService
      .getAllPersons()
      .then(allPersons => setPersons(allPersons))
      .catch(error => console.log(error));
  }, []);

  // hide message after few sec
  useEffect(() => {
    setTimeout(() => {
      setMessageType("");
      setMessage("");
    }, 10000);
  }, [message, messageType]);

  return (
    <div style={{ paddingLeft: "15px" }}>
      <h2>Phonebook</h2>
      {messageType === "success" || messageType === "error" ? (
        <Message message={message} messageType={messageType} />
      ) : null}
      <Filter persons={persons} setFilteredName={setFilteredName} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      <Persons
        persons={persons}
        setPersons={setPersons}
        filterdName={filterdName}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
    </div>
  );
};

export default App;
