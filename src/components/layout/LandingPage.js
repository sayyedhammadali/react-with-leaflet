import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapView from '../map/MapView';
import SideMenu from '../menu/SideMenu';
import BottomMenu from '../menu/BottomMenu';

class LandingPage extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="wrapper">
        <SideMenu />

        <BottomMenu />

        <MapView />
      </div>
    );
  }
}

export default withRouter(LandingPage);
