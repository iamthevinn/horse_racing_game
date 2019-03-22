import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Paper, Button } from '@material-ui/core';
import { rolledDiceNowMoveHorse, moveHorse, SET_DICE_TOTAL } from '../Actions/GamePlayActions';
import '../../node_modules/react-dice-complete/dist/react-dice-complete.css'

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInput: ""
    }
    this.handleDiceInputChange = this.handleDiceInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.rollAll = this.rollAll.bind(this);
    this.rollDone = this.rollDone.bind(this);
  }

  handleDiceInputChange = (e) => {
    this.setState({ diceInput: e.target.value })
  }

  rollAll() {
    this.reactDice.rollAll();
  }

  rollDone(diceTotal) {
    this.props.rolledDiceNowMoveHorse(diceTotal);
  }

  handleKeyPress = (e, diceInput) => {
    if (e.key === 'Enter')
      this.props.moveHorse(diceInput, 1);
  }

  render() {
    const { lastRoll } = this.props;
    return (
      <Paper className={"DiceContainer FlexCenter"} elevation={10} >
        <div>
          <div>
            <input type={"text"} />
          </div>
          <div className={"FlexCenter"}>
            <Button variant="contained" color="primary" onClick={this.rollAll}>Roll</Button>
          </div>
          <div className={"LastRoll"} hidden={!lastRoll} >
            Last Roll: {lastRoll}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastRoll: state.gamePlayReducer.lastRoll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDiceTotal: (diceTotal) => dispatch({ type: SET_DICE_TOTAL, data: diceTotal }),
    moveHorse: (postPosition, numberOfSquares) => dispatch(moveHorse(postPosition, numberOfSquares)),
    rolledDiceNowMoveHorse: (diceTotal) => dispatch(rolledDiceNowMoveHorse(diceTotal))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
