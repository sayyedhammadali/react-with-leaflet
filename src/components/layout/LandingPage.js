import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MapView from '../map/MapView';
import Sidebar from '../sidebar/Sidebar';

class LandingPage extends Component {
  state = {
    sidebarShow: true,
  }

  componentDidMount() {
  }

  render() {
    const { sidebarShow } = this.state;

    return (
      <div className="wrapper">

        <Sidebar sidebarShow={sidebarShow}/>

        <div id="content" className='p-0'>

          <button
            id="sidebarCollapse"
            className="btn btn-dark sidebar-toggle-btn"
            onClick={() => this.setState({ sidebarShow: !sidebarShow })}
          >
            <i className="fas fa-align-left"></i>
          </button>

          <MapView />

        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
