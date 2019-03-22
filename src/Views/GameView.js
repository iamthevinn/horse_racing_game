import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Dice from '../Components/Dice';
import { setHorsePosition } from '../Actions/GamePlayActions'

class GameView extends Component {
  render() {
    const { gameMode, horsePositions, moveHorse } = this.props;
    return (
      <div className={"FlexCenter"}>
          {gameMode === 'dice' && <Dice />}
          <Board horsePositions={horsePositions} moveHorse={moveHorse} />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    gameMode: state.gamePlayReducer.gameMode,
    horsePositions: state.gamePlayReducer.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, squarePosition) => dispatch(setHorsePosition(postPosition, squarePosition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)