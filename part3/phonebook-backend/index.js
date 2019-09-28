const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const PORT = 3001;

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

const generateId = () => {
  const maxId =
    persons.length > 0 ? Math.max(...persons.map(person => person.id)) : 0;
  return maxId + 1;
};

app.get("/info", (req, res) => {
  res.end(`<div>
    Phonebook has info for ${persons.length} people
    <br /><br/>
    ${new Date()}
  </div>`);
});

// get all numbers
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// get single person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  res.json(person);
});

// create person
app.post("/api/persons", (req, res) => {
  const { name, number } = req.body;

  const isDuplicate = Boolean(persons.find(person => person.name === name));

  if (!name || !number || isDuplicate) {
    if (!name) {
      return res.status(400).json({
        error: "name is missing",
      });
    } else if (!number) {
      return res.status(400).json({
        error: "number is missing",
      });
    } else if (isDuplicate) {
      return res.status(400).json({
        error: "name must be unique",
      });
    }
  }

  const person = {
    name: name,
    number: number,
    id: generateId(),
  };

  // adds news created person to persons object
  persons = persons.concat(person);

  res.json(person);
});

// delete single person
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  persons = persons.filter(person => person.id !== id);
  res.status(204).end();
});

app.listen(PORT, console.log(`Server running at ${PORT}`));
