import React from 'react';
import MapView from './components/LandingPage';
import './App.css';
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
