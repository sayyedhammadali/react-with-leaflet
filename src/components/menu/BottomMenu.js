import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BottomSubMenu from './BottomSubMenu';

class BottomMenu extends Component {
  state = {
    bottomMenuShow: false,
  }

  render() {
    const { bottomMenuShow } = this.state;

    return (
      <div id="bottom-menu" className={bottomMenuShow ? "active" : ""}>
        <div className="bottom-menu-content-container">
          <BottomSubMenu bottomMenuShow={() => this.setState({ bottomMenuShow: !bottomMenuShow })} />

          <div className="menu-content">
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
            <h1>bottom menu</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BottomMenu);
