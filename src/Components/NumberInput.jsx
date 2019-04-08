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
    if (e.key === 'Enter')
      this.props.moveHorse(diceInput, 1);
  }

  render() {
    const { diceInput } = this.state;
    const { lastEnteredNumber } = this.props;
    return (
      <Paper className={"DiceContainer FlexCenter"} elevation={10} >
        <div>
          <div className={"NumberInput"}>
            <input type={"text"} onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
          </div>
          <div className={"FlexCenter"}>
            <Button variant="contained" color="primary" onClick={() => this.props.moveHorse(diceInput, 1)}>Forward</Button>
            <Button variant="contained" color="primary" onClick={() => this.props.moveHorse(diceInput, -1)}>Back</Button>
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
