// import './App.css';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// import MyMapComponent from './components/MyMapComponent';

// const MyMapComponent = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.0853, lng: 34.7818 }}>
//       {props.isMarkerShown && (
//         <Marker position={{ lat: 32.0853, lng: 34.7818 }} />
//       )}
//     </GoogleMap>
//   ))
// );

// function App  () {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <MyMapComponent
//                   isMarkerShown
//                   googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"}
//                   loadingElement={<div style={{ height: `100%` }} />}
//                   containerElement={<div style={{ height: `400px` }} />}
//                   mapElement={<div style={{ height: `100%` }} />}
//                 />
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

//npm install react-google-maps

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import "bootstrap/dist/css/bootstrap.min.css";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.0853, lng: 34.7818 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 32.0853, lng: 34.7818 }} />
      )}
    </GoogleMap>
  ))
);

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Google Maps</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              MAPS
              <div>
                <MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAN7mwyR_B3NDDLnuwkLds1RU9IUSBklc8&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;