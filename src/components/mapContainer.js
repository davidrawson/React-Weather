import React, { useState } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    width: "100%",
    height: "100vh",
  };

  const defaultCenter = {
    lat: 55.96233197399791,
    lng: -3.196967617939601,
  };

  const mapClicked = (event) => {
    // setLat(event.latLng.toJSON().lat);
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

export default MapContainer;

// export class MapContainer extends Component {
//   // eslint-disable-next-line
//   constructor(props) {
//     super(props);
//   }

// mapClicked = (mapProps, map, clickEvent) => {
// console.log(JSON.stringify(clickEvent.latLng.toJSON(), null, 2));
// console.log(clickEvent.latLng.toJSON().lat);

//     console.log(this.props);

//     this.setState({ lat: clickEvent.latLng.toJSON().lat });
//     this.setState({ lon: clickEvent.latLng.toJSON().lng });

//     console.log(this.state.lat);
//   };

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//           // lat: this.props.lat,
//           // lng: this.props.lon,
//           lat: "55.96233197399791",
//           lng: "-3.196967617939601",
//         }}
//         onClick={this.mapClicked}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_MAP_API_KEY,
// })(MapContainer);
