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
      <div id="sidebar" className={sidebarShow ? "active" : null} >
        <div className="sidebar-header text-center">
          <h6 className="mb-0">PartyGPS</h6>
        </div>

        <div className="sidebar-content">
          <div className="thumbnail">
            <img class="img-thumbnail p-0 border-0 rounded-0" src="http://2.bp.blogspot.com/-AgxX66j_jhM/U2a3ffe7BzI/AAAAAAAALWQ/6yzknZY-glc/s1600/Berlin_TV_Tower_at_Night_Wonderful_Fernsehturm_Germany_HD_Desktop_Wallpaper_rewallpaper.blogspot.com.jpg" />
          </div>
          <div className="text">
            <p className="name">Special New Year's Evening House</p>
            <p className="date">Saturday, 26 October 2019</p>
            <p className="time">08:00pm - 06:00 am</p>
            {/*<div class="accordion" id="accordion-description">
              <p data-toggle="collapse" data-target="#collapseDescription" aria-expanded="true" aria-controls="description">
                read more...
              </p>
              <div id="collapseDescription" class="collapse show" aria-labelledby="description" data-parent="#accordion-description">
                <p class="card-body bg-dark">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>*/}
          </div>
          <div className="coming-soon">
            <p>coming soon...</p>
          </div>
        </div>

        <div className="sidebar-footer">
          <p>Hauptstraße 15, 10317, Berlin.</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
