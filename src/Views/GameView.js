import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Dice from '../Components/Dice';
import NumberInput from '../Components/NumberInput'
import { setHorsePosition, setGameMode, resetGame } from '../Actions/GamePlayActions'
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

class GameView extends Component {
  constructor(props) {
    super(props);
    this.toggleGameMode = this.toggleGameMode.bind(this);
  }

  toggleGameMode(e, checked) {
    this.props.setGameMode(checked);
  }

  render() {
    const { numberInputMode, horsePositions, moveHorse, winner } = this.props;
    const winnerText = winner ? `Winner: ${winner}` : '\xa0';
    return (
      <div className={"FlexCenter"} >
        <div>
          <h1 style={{color: "#277053", fontSize: "3em", textAlign: "center"}} >{winnerText}</h1>
          <div className={"GameMenu"} >
            <div className={"DiceManualSlider"}>
              <FormLabel>Dice</FormLabel>
              <Switch onChange={this.toggleGameMode} checked={numberInputMode} />
              <FormLabel>Manual</FormLabel>
            </div>
            <div className={"ResetGame FlexRight"}>
              <Button onClick={this.props.resetGame} variant={"contained"} color={"secondary"} >Reset Horses</Button>
            </div>
          </div>
          {numberInputMode ? <NumberInput /> : <Dice />}
        </div>
        <Board horsePositions={horsePositions} moveHorse={moveHorse} />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    numberInputMode: state.gamePlayReducer.numberInputMode,
    horsePositions: state.gamePlayReducer.horsePositions,
    winner: state.gamePlayReducer.winner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, squarePosition) => dispatch(setHorsePosition(postPosition, squarePosition)),
    setGameMode: (gameMode) => dispatch(setGameMode(gameMode)),
    resetGame: () => dispatch(resetGame())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)