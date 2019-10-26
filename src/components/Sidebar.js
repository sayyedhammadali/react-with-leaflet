import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
  state = {

  }

  componentDidMount() {
  }

  render() {
    const { sidebarShow } = this.props;

    return (
      <nav id="sidebar" className={sidebarShow ? "active" : null} >
        <div className="sidebar-header text-center">
          <h3 className="mb-0">PartyGPS</h3>
        </div>

        <ul className="list-unstyled components m-0 p-0">
          <img class="img-thumbnail p-0 border-0 rounded-0" src="http://2.bp.blogspot.com/-AgxX66j_jhM/U2a3ffe7BzI/AAAAAAAALWQ/6yzknZY-glc/s1600/Berlin_TV_Tower_at_Night_Wonderful_Fernsehturm_Germany_HD_Desktop_Wallpaper_rewallpaper.blogspot.com.jpg" />
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="list-unstyled m-0">
          <p className="m-0">Hauptstraße 15, 10317, Berlin.</p>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Sidebar);
