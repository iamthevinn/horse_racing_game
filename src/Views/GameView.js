import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Dice from '../Components/Dice';
import NumberInput from '../Components/NumberInput'
import { setHorsePosition, setGameMode, resetGame } from '../Actions/GamePlayActions'
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { numberOfDecks } from '../Data/Decks';

class GameView extends Component {
  constructor(props) {
    super(props);
    this.toggleGameMode = this.toggleGameMode.bind(this);
  }

  toggleGameMode(e, checked) {
    this.props.setGameMode(checked);
  }

  render() {
    const { numberInputMode, horsePositions, moveHorse, winner, paidAmount, gameNumberIndex } = this.props;
    const winnerText = winner ? <div className={"Winner"}>Winner: {winner}</div> : <div className={"NoWinner"}>{'\xa0'}</div>;
    const raceNumber = gameNumberIndex + 1;
    return (
      <div className={"FlexCenter"} >
        <div>
          {winnerText}
          <div style={{fontSize:'2em', fontWeight: 'bold'}}>Race Number: {raceNumber}</div>
          <div style={{fontSize:'2em', fontWeight: 'bold'}}>Chips Paid: {paidAmount}  ({Math.floor(paidAmount * numberOfDecks / 4)}. R.{(paidAmount * numberOfDecks) % 4})</div>
          <div className={"GameMenu"} >
            <div className={"DiceManualSlider"}>
              <FormLabel>Dice</FormLabel>
              <Switch onChange={this.toggleGameMode} checked={numberInputMode} />
              <FormLabel>Manual</FormLabel>
            </div>
            <div className={"ResetGame FlexRight"}>
              <Button onClick={this.props.resetGame} variant={"contained"} color={"secondary"} >New Game</Button>
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
    winner: state.gamePlayReducer.winner,
    paidAmount: state.gamePlayReducer.paidAmount,
    gameNumberIndex: state.gamePlayReducer.gameNumberIndex
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