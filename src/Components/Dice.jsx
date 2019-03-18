import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Paper, Button } from '@material-ui/core';
import { rollDiceAndMoveHorse, moveHorse, SET_DICE_TOTAL } from '../Actions/GamePlayActions';
import ReactDice from 'react-dice-complete'
import '../../node_modules/react-dice-complete/dist/react-dice-complete.css'

class Dice extends Component {
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
    this.props.rollDice(diceTotal);
  }

  handleKeyPress = (e, diceInput) => {
    if (e.key === 'Enter')
      this.props.moveHorse(diceInput, 1);
  }

  render() {
    return (
      <Paper className={"FlexCenter DiceContainer"} elevation={10} >
        <div>
          <div>
            <ReactDice
              numDice={2}
              outline={true}
              outlineColor={'#000000'}
              faceColor={'#FFFFFF'}
              dotColor={'#000000'}
              rollTime={1}
              rollDone={this.rollDone}
              disableIndividual={true}
              ref={dice => this.reactDice = dice}
            />
          </div>
          <div className={"FlexCenter"}>
            <Button variant="contained" color="primary" onClick={this.rollAll}>Roll</Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    diceTotal: state.diceTotal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDiceTotal: (diceTotal) => dispatch({ type: SET_DICE_TOTAL, data: diceTotal }),
    moveHorse: (postPosition, numberOfSquares) => dispatch(moveHorse(postPosition, numberOfSquares)),
    rollDice: (diceTotal) => dispatch(rollDiceAndMoveHorse(diceTotal))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
