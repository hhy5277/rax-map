import React from 'react';
import {Map} from 'rax-map';
require('../static/playground.less');

const InfoWindow = Map.InfoWindow;

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowOpen: true
    };

    this.amapEvents = {
      click: (e) => { this.loadRestaurant(e); }
    };
  }

  loadRestaurant(e) {
    const lnglat = e.lnglat;
    const longitude = lnglat.getLng();
    const latitude = lnglat.getLat();

  }

  renderMyLogo() {
    return <div className="rax-map-icon">
      <a href="#">
        <i></i>
        <p>rax-map</p>
      </a>
    </div>;
  }

  renderInfoWindow() {
    return <InfoWindow
      open={this.state.windowOpen}
      position={{longitude: 120, latitude: 30}}
    >
      <div>Hello Kitty</div>
    </InfoWindow>;
  }

  render() {
    return <div id="playground">
      <Map events={this.amapEvents}>
        { this.renderMyLogo() }
        { this.renderInfoWindow() }
      </Map>
    </div>;
  }
}
