import React, { Component, Fragment } from 'react';

class UpcomingEvents extends Component {
  render() {
    return (
      <Fragment>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="" src="http://www.belushis.com/__data/assets/image/0006/454452/453315-D-Belushis-Berlin-NYE-PRE-PARTY-Poster-2.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="" src="https://www.belushis.com/__data/assets/image/0015/505104/H100_A3_party_poster.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="" src="https://kulturhaeuser-production.s3.eu-central-1.amazonaws.com/uploads/event/image/8604/180811_La_Bomba_Cumbia_m_La_Mula_Santa__Sistema_Sonidero_web1000.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Fragment>
    );
  };
}

export default UpcomingEvents;
