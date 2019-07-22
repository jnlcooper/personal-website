import React from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiai1jb29wZXIiLCJhIjoiY2p5dThwbnlyMGM5azNkb2FnbTdwMDEyZiJ9.Noo11seIMdz7aKWRp209xA';

class ContactPage_Map extends React.Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 45.380643,
      longitude: -75.700289,
      zoom: 16
    }
  };

  render() {
    return (
      /*mapStyle="mapbox://styles/mapbox/dark-v9"*/
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/j-cooper/cjz9uo9cn4atc1cqno449i4tz"
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}

export default ContactPage_Map;