import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';

class GameView extends Component {
  render() {
    return (
      <div>
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