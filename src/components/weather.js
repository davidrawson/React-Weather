import React from "react";
// import "./styles.css";
import { Card } from "semantic-ui-react";
import moment from "moment";
// import { mockComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">City: {weatherData.name}</Card.Header>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleDateString("en-GB")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleDateString("en-GB")}
      </p>
      <p>Temperature: {weatherData.main.temp} &deg;C</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Wind speed: {weatherData.wind.speed}</p>
      <p>Wind direction: {weatherData.wind.deg} &deg;</p>
      <p>Day: {moment().format("dddd")}</p>
      <p>Date: {moment().format("LL")}</p>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
