import React from "react";
import "./styles.css";
import { Button } from "semantic-ui-react";
import moment from "moment";

const WeatherCard = ({ weatherData }) => (
  <div className="main">
    <div className="top">
      <p className="header">{weatherData.name}</p>
      <Button
        className="button"
        inverted
        color="orange"
        circular
        icon="refresh"
        onClick={refresh}
      />
    </div>
    <p className="date">
      Date: {moment().format("dddd")}, <span>{moment().format("LL")}</span>
    </p>
    <div className="flex sunrise-sunset">
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-GB")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-GB")}
      </p>
    </div>
    <div className="flex list-white">
      <p>Temperature: {weatherData.main.temp} &deg;C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
    <div className="flex list-white">
      <p>Wind speed: {weatherData.wind.speed}</p>
      <p>Wind direction: {weatherData.wind.deg} &deg;</p>
    </div>
  </div>
);

const refresh = () => {
  window.location.reload();
};

export default WeatherCard;
