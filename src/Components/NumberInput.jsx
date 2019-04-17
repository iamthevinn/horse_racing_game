import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Paper, Button } from '@material-ui/core';
import { moveHorse } from '../Actions/GamePlayActions';
import '../../node_modules/react-dice-complete/dist/react-dice-complete.css'

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInput: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ diceInput: e.target.value })
  }

  handleKeyPress = (e) => {
    const { diceInput } = this.state;
    if (e.key === 'Enter' && !this.isInvalidInput(diceInput)) {
      this.props.moveHorse(diceInput, 1);
      this.setState({ diceInput: "" })
    }
  }

  handleButtonClick = (diceInput, forwardOrBack) => {
    this.props.moveHorse(diceInput, forwardOrBack === 'forward' ? 1 : -1);
    this.setState({ diceInput: "" });
  }

  isInvalidInput = (diceInput) => {
    if (isNaN(diceInput))
      return true;
    if (diceInput < 2 || diceInput > 12)
      return true;
  }

  render() {
    const { diceInput } = this.state;
    const { lastEnteredNumber } = this.props;

    const disableButtons = this.isInvalidInput(diceInput);

    return (
      <Paper className={"DiceContainer FlexCenter"} elevation={10} >
        <div>
          <div className={"NumberInput"}>
            <input type={"text"} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} value={diceInput} />
          </div>
          <div className={"FlexSpaceEvenly"}>
            <Button disabled={disableButtons} variant="contained" color="primary" onClick={() => this.handleButtonClick(diceInput, 'back')}>Back</Button>
            <Button disabled={disableButtons} variant="contained" color="primary" onClick={() => this.handleButtonClick(diceInput, 'forward')}>Forward</Button>
          </div>
          <div className={"LastRoll"} hidden={!lastEnteredNumber} >
            Last Entered Number: {lastEnteredNumber}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastEnteredNumber: state.gamePlayReducer.lastEnteredNumber
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, numberOfSquares) => dispatch(moveHorse(postPosition, numberOfSquares))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
