import React, { Component, Fragment } from 'react';
import UpcomingEvents from './UpcomingEvents';

class SidebarFooter extends Component {
  render() {
    return (
      <footer className="sidebar-footer">
        <section className="sidebar-footer-upcoming-events">
          <UpcomingEvents/>
        </section>

        <section className="sidebar-footer-address">
          <p>Hauptstraße Behind Madras Cafe 15, 10317, Berlin.</p>
        </section>
      </footer>
    );
  };
}

export default SidebarFooter;
