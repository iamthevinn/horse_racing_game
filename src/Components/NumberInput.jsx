import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Paper, Button } from '@material-ui/core';
import { moveHorse, setLastEnteredNumber, addPayAmountToGameTotal } from '../Actions/GamePlayActions';
import '../../node_modules/react-dice-complete/dist/react-dice-complete.css'

const numberInputStyle = {
  height: "28px",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "200"
}

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
    const { moveHorse, horsePositions, winner } = this.props;

    if (diceInput === "reset") {
      localStorage.clear();
      window.location.reload();
    }

    if (winner)
      return;

    const horsePositionIndex = diceInput - 2;
    const horsePosition = horsePositions[horsePositionIndex];
    if (e.key === 'Enter' && !this.isInvalidInput(diceInput)) {
      if (horsePosition > -2) {
        moveHorse(diceInput, 1);
      } else if (horsePosition < -1) {
        const paidAmount = this.getPayAmount(diceInput);
        this.props.addPayAmountToGameTotal(paidAmount, diceInput);
      }
      this.setState({ diceInput: "" })
      this.props.setLastEnteredNumber(diceInput);
    }
  }

  handleButtonClick = (diceInput, forwardOrBack) => {
    const { moveHorse, horsePositions, winner } = this.props;
    const horsePositionIndex = diceInput - 2;
    const horsePosition = horsePositions[horsePositionIndex];

    if (winner)
      return;


    if (horsePosition > -2) {
      moveHorse(diceInput, forwardOrBack === 'forward' ? 1 : -1);
    } else if (horsePosition < -1) {
      const paidAmount = this.getPayAmount(diceInput);
      this.props.addPayAmountToGameTotal(paidAmount, diceInput);
    }
    this.setState({ diceInput: "" });
    this.props.setLastEnteredNumber(diceInput);
  }

  isInvalidInput = (diceInput) => {
    if (isNaN(diceInput))
      return true;
    if (diceInput < 2 || diceInput > 12)
      return true;
  }

  getPayAmount = (diceInput) => {
    const { horsePositions } = this.props;
    const horsePositionIndex = diceInput - 2;
    const horsePosition = horsePositions[horsePositionIndex];
    if (horsePosition < -1)
      switch (horsePosition) {
        case -5:
          return 1;
        case -4:
          return 2;
        case -3:
          return 3;
        case -2:
          return 4;
        default:
          return 0;
      }
    return 0;
  }

  render() {
    const { diceInput } = this.state;
    const { lastEnteredNumber } = this.props;

    const lastToDisplay = lastEnteredNumber ? `Last Entered Number: ${lastEnteredNumber}` : '\xa0';

    const disableButtons = this.isInvalidInput(diceInput);
    const payAmount = this.getPayAmount(lastEnteredNumber);
    const payNotification = payAmount ? `Pay ${payAmount}` : '\xa0';

    return (
      <Paper className={"DiceContainer FlexCenter"} elevation={10} >
        <div className={"Fill"}>
          <div className={"FlexCenterBottom ThirdHeight PayNotification"}>
            {payNotification}
          </div>
          <div className={"FlexCenter ThirdHeight"}>
            <div>
              <input autoFocus style={numberInputStyle} type={"text"} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} value={diceInput} />
            </div>
            <div className={"SubmitButton"}>
              <Button disabled={disableButtons} variant="contained" color="primary" onClick={() => this.handleButtonClick(diceInput, 'forward')}>Submit</Button>
            </div>
          </div>
          <div className={"FlexCenterTop ThirdHeight LastEnteredNumber"} hidden={!lastEnteredNumber} >
            {lastToDisplay}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastEnteredNumber: state.gamePlayReducer.lastEnteredNumber,
    horsePositions: state.gamePlayReducer.horsePositions,
    winner: state.gamePlayReducer.winner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, numberOfSquares) => dispatch(moveHorse(parseInt(postPosition, 10), numberOfSquares)),
    setLastEnteredNumber: (enteredNumber) => dispatch(setLastEnteredNumber(enteredNumber)),
    addPayAmountToGameTotal: (paidAmount, diceInput) => dispatch(addPayAmountToGameTotal(paidAmount, parseInt(diceInput), 10))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberInput);
