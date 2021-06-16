import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";

export default function App() {
  const [lat, setLat] = useState(["55.96233197399791"]);
  const [lon, setLon] = useState(["-3.196967617939601"]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function (position) {
      // setLat(position.coords.latitude);
      setLat("55.96233197399791");
      // setLon(position.coords.longitude);
      setLon("-3.196967617939601");
      // });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
      console.log(`Latitude is: ${lat}`);
      console.log(`Longitude is: ${lon}`);
    };
    fetchData();
  }, [lat, lon]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
