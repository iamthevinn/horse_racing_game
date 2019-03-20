import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomAppBar } from './Components/Navigation/CustomAppBar'
import HomeView from './Views/HomeView'
import GameView from './Views/GameView'
import GameStatsView from './Views/GameStatsView'
import BoardView from './Views/BoardView'
import NavigationDrawer from './Components/Navigation/NavigationDrawer'
import { toggleDrawer } from './Actions/NavigationActions'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';

class App extends Component {

  toggleDrawer = () => {
    this.props.toggleDrawer();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/' render={({ history }) => <CustomAppBar pathname={history.location.pathname} onMenuClick={this.toggleDrawer} />} />
            <NavigationDrawer toggleDrawer={this.toggleDrawer} open={this.props.drawerOpen} />
            <Switch>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/playgame" component={GameView} />
              <Route exact path="/gamestats" component={GameStatsView} />
              <Route exact path="/board/" component={BoardView} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.navigationReducer.drawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
