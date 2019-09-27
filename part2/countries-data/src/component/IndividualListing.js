import React, { useState, useEffect } from "react";
import axios from "axios";

const IndividualListing = ({ data }) => {
  const [weatherData, setWeatherData] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${data.capital},${data.alpha3Code}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric` // don't worry this is not my api key. lol
      )
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => console.log(error));
  }, [data.capital, data.alpha3Code]);

  return (
    <div>
      <h1>{data.name}</h1>
      capital {data.capital}
      <br />
      population {data.population}
      <h3>languages</h3>
      <ul>
        {data.languages.map((element, index) => (
          <li key={index}>{element.name}</li>
        ))}
      </ul>
      <img
        src={data.flag}
        style={{ height: "7.5rem" }}
        alt={`${data.name} flag`}
      />
      {weatherData !== undefined ? (
        <div>
          <h2>{`Weather in ${data.capital}`}</h2>
          <b>temperature: </b> {weatherData.main.temp} &deg;C
          <img
            style={{ display: "block" }}
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <b>wind:</b> {weatherData.wind.speed} m/s
        </div>
      ) : null}
    </div>
  );
};

export default IndividualListing;
