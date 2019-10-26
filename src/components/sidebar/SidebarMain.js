import React, { Component, Fragment } from 'react';

class SidebarMain extends Component {
  render() {
    return (
      <main className="sidebar-content">
        <section className="sidebar-content-text">
          <p className="name">Special New Year's Evening House</p>
          <p className="date">Saturday, 26 October 2019</p>
          <p className="time">08:00pm - 06:00 am</p>
          <p data-toggle="collapse" data-target="#collapseDescription" aria-expanded="true" aria-controls="description">read more...</p>
        </section>
      </main>
    );
  };
}

export default SidebarMain;
