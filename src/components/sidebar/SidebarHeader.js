import React, { Component, Fragment } from 'react';

class SidebarHeader extends Component {
  render() {
    return (
      <header className="sidebar-header">
        <section className="sidebar-header-menu">
          <div className="back-btn"><i className="fas fa-arrow-left"></i></div>
          <h6 className="header-title">PartyGPS Thie Will Be A Very Long Title Ever For a Label In Then World</h6>
          <div className="overlay-menu-btn"><i className="fas fa-arrow-down"></i></div>
        </section>

        <section className="sidebar-header-thumbnail">
          <img className="img-thumbnail" src="http://2.bp.blogspot.com/-AgxX66j_jhM/U2a3ffe7BzI/AAAAAAAALWQ/6yzknZY-glc/s1600/Berlin_TV_Tower_at_Night_Wonderful_Fernsehturm_Germany_HD_Desktop_Wallpaper_rewallpaper.blogspot.com.jpg" />
        </section>
      </header>
    );
  };
}

export default SidebarHeader;
