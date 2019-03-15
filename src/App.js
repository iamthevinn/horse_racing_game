import React, { Component } from 'react';
import GameView from './Views/GameView'
import GameStatsView from './Views/GameStatsView'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={GameView} />
            <Route exact path="/gamestats" component={GameStatsView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
