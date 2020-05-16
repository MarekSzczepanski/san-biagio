import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

class Map extends React.Component {
  map = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 53.7026302, lng: 19.9599417 }}
      >
        <Marker
          position={{
            lat: 53.7026302,
            lng: 19.9599417,
          }}
        />
      </GoogleMap>
    );
  };
  render() {
    const MapWrapped = withScriptjs(withGoogleMap(this.map));
    return (
      <div className="map">
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCI7z9-xK0YEkNJvY-C8T6HRsEPX7gYs3E`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
