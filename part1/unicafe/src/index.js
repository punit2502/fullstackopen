import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = props => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
);

const Statistics = props => {
  const hasAtLeastOneFeedback =
    props.good > 0 || props.neutral > 0 || props.bad > 0;
  return (
    <div>
      <h1>statistics</h1>
      {hasAtLeastOneFeedback ? (
        <div>
          <table>
            <tbody>
              <Statistic text="good" value={props.good} />
              <Statistic text="neutral" value={props.neutral} />
              <Statistic text="bad" value={props.bad} />
              <Statistic
                text="all"
                value={props.good + props.neutral + props.bad}
              />
              <Statistic
                text="average"
                value={
                  (1 * props.good + 0 * props.neutral + -1 * props.bad) /
                    (props.good + props.neutral + props.bad) || 0
                }
              />
              <Statistic
                text="positive"
                value={
                  (props.good / (props.good + props.neutral + props.bad)) *
                    100 || 0
                }
              />
            </tbody>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    setGood(good + 1);
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={handleGoodFeedback}>good</button>
        <button onClick={handleNeutralFeedback}>neutral</button>
        <button onClick={handleBadFeedback}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
