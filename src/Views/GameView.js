import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';
import Dice from '../Components/Dice';
import NumberInput from '../Components/NumberInput'
import { setHorsePosition, setGameMode } from '../Actions/GamePlayActions'
import Switch from '@material-ui/core/Switch';
import FormLabel from '@material-ui/core/FormLabel';

class GameView extends Component {
  constructor(props) {
    super(props);
    this.toggleGameMode = this.toggleGameMode.bind(this);
  }

  toggleGameMode(e, checked) {
    this.props.setGameMode(checked);
  }

  render() {
    const { numberInput, horsePositions, moveHorse } = this.props;
    return (
      <div className={"FlexCenter"} >
        <div>
          <FormLabel>Dice</FormLabel>
          <Switch onChange={this.toggleGameMode} value={numberInput} />
          <FormLabel>Manual</FormLabel>
          {numberInput ? <NumberInput /> : <Dice />}
        </div>
        <Board horsePositions={horsePositions} moveHorse={moveHorse} />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    numberInput: state.gamePlayReducer.numberInput,
    horsePositions: state.gamePlayReducer.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, squarePosition) => dispatch(setHorsePosition(postPosition, squarePosition)),
    setGameMode: (gameMode) => dispatch(setGameMode(gameMode))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)