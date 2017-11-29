import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { PlaceMarker } from './PlaceMarker';

const BnbMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={props.center}
    defaultZoom={props.zoom}>
    {props.places}
  </GoogleMap>
));

export class Map extends Component {
  constructor(props) {
    super(props)

    this.zoom = 7

    this.state = {
      lat: 50.0515918,
      lng: 19.9357531
    };
  }

  render() {
    const {lat, lng} = this.state;
    const places = [<PlaceMarker lat={lat} lng={lng} price={20} name={"Hotel"} description={"Hotel desc"} />]

    return (
      <div style={{width: `750px`, height: `750px`}}>
        <BnbMap
          center={{
            lat: lat,
            lng: lng
          }}
          zoom={this.zoom}
          places={places}
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
      </div>
    );
  }
}

export default Map
