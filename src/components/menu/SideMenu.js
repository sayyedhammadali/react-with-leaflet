import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SideMenu extends Component {
  state = {
    sideMenuShow: false,
  }

  render() {
    const { sideMenuShow } = this.state;

    return (
      <div id="side-menu" className={sideMenuShow ? "active" : ""}>
        <div className="menu-content-container">
          <button
            id="sideMenuCollapse"
            className="btn btn-dark side-menu-toggle-btn"
            onClick={() => this.setState({ sideMenuShow: !sideMenuShow })}
          >
            <i className="fas fa-align-left"></i>
          </button>

          <div className="menu-content">
            <h1>side menu</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenu);
