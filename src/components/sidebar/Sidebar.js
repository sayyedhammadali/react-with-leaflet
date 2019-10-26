import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SidebarHeader from './SidebarHeader';
import SidebarMain from './SidebarMain';
import SidebarFooter from './SidebarFooter';

class Sidebar extends Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    const { sidebarShow } = this.props;

    return (
      <div id="sidebar" className={sidebarShow ? "active" : ""} >
        <SidebarHeader/>

        <SidebarMain/>

        <SidebarFooter/>
      </div>
    );
  }
}

export default withRouter(Sidebar);
