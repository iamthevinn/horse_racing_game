import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Paper from '@material-ui/core/Paper';

class GameView extends Component {
  render() {
    return (
      <div>
        <h1>
          Horse Racing Game
        </h1>
        <Board />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)