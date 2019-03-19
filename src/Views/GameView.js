import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Dice from '../Components/Dice';

class GameView extends Component {
  render() {
    const { gameMode } = this.props;
    return (
      <div className={"FlexCenter"}>
          {(gameMode === 'dice' || gameMode === 'numberInput') && <Dice />}
          <Board />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    gameMode: state.gamePlayReducer.gameMode
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)