import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather";
import { Dimmer, Loader } from "semantic-ui-react";
// import MapContainer from "./components/mapContainer";
// import React, { useState } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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

  // from here

  const MapContainer = () => {
    const mapStyles = {
      width: "100%",
      height: "100vh",
    };

    const defaultCenter = {
      lat: 55.96233197399791,
      lng: -3.196967617939601,
      // lat: lat,
      // lng: lon,
    };

    const mapClicked = (event) => {
      setLat(event.latLng.toJSON().lat);
      setLon(event.latLng.toJSON().lng);
      // this.setState({ lon: event.latLng.toJSON().lng });
      return "";
    };

    // const location = {
    //   lat: 41.3797,
    //   lng: 2.1682,
    // };

    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}
          onClick={mapClicked}
        >
          <Marker key="123" position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  };

  // to here

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading...</Loader>
          </Dimmer>
        </div>
      )}
      <div>
        <MapContainer />
        Here is a map container
      </div>
    </div>
  );
}
