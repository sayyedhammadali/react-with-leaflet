import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BottomSubMenu extends Component {
  state = {
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark d-flex position-fixed bottom-sub-menu-container">
        <div className="bottom-sub-menu-left">
          <button
            className="btn"
            type="button"
          >
            <i className="fas fa-crosshairs"></i>
          </button>
        </div>

        <div className="bottom-sub-menu-center">
          <button
            className="btn"
            type="button"
            onClick={this.props.bottomMenuShow}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>

        <div className="bottom-sub-menu-right">
          <button className="btn" type="button">
            <i className="fas fa-bell"></i>
          </button>

          <button className="btn" type="button">
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </nav>
    );
  }
}

export default withRouter(BottomSubMenu);
