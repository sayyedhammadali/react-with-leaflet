import React from 'react';
import MapView from './components/LandingPage';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
