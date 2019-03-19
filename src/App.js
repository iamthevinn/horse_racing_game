import React, { Component } from 'react';
import { CustomAppBar } from './Components/Navigation/CustomAppBar'
import HomeView from './Views/HomeView'
import GameView from './Views/GameView'
import GameStatsView from './Views/GameStatsView'
import NavigationDrawer from './Components/Navigation/NavigationDrawer'
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
        <CustomAppBar pageName={"Horse Racing"} />
        <NavigationDrawer />
        <Router>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/playgame" component={GameView} />
            <Route exact path="/gamestats" component={GameStatsView} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
