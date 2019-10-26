import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/main.scss';
import MapView from './components/layout/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={MapView} />
          <Route exact path='/venue/:id' component={MapView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
