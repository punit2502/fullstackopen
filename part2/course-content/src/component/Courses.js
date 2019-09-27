import React, { Fragment } from "react";

const Courses = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const Header = props => {
    return <h2>{props.course}</h2>;
  };

  const Part = props => {
    return (
      <p>
        {props.part} {props.exercise}
      </p>
    );
  };

  const Content = props => {
    return (
      <Fragment>
        {props.parts.map(elem => (
          <Part
            key={elem.id}
            part={props.parts[elem.id - 1].name}
            exercise={props.parts[elem.id - 1].exercises}
          />
        ))}
      </Fragment>
    );
  };

  const Total = props => {
    let total = props.exercises.reduce((s, p) => s + p.exercises, 0);
    return <strong>total of {total} exercises</strong>;
  };

  const Course = ({ course }) => (
    <Fragment>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </Fragment>
  );

  return (
    <div>
      {courses.map(elem => (
        <Course key={elem.id} course={courses[elem.id - 1]} />
      ))}
    </div>
  );
};

export default Courses;
