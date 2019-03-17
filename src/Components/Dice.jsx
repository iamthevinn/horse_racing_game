import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Paper, Button } from '@material-ui/core';
import { moveHorse, SET_DICE_TOTAL } from '../Actions/GamePlayActions';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInput: ""
    }
    this.handleDiceInputChange = this.handleDiceInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleDiceInputChange = (e) => {
    this.setState({ diceInput: e.target.value })
  }

  handleKeyPress = (e, diceInput) => {
    if (e.key === 'Enter')
      this.props.moveHorse(diceInput, 1);
  }

  render() {
    const { moveHorse } = this.props;
    const { diceInput } = this.state;
    return (
      <Paper className={"FlexCenter DiceContainer"} elevation={10} >
        <div>
          <div>
            <input type='text' value={diceInput} onChange={this.handleDiceInputChange} onKeyPress={(e) => this.handleKeyPress(e, diceInput)} />
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={() => moveHorse(diceInput, 1)}>Move Up</Button>
            <Button variant="contained" color="secondary" onClick={() => moveHorse(diceInput, -1)}>Move Back</Button>
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
    moveHorse: (postPosition, numberOfSquares) => dispatch(moveHorse(postPosition, numberOfSquares))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
