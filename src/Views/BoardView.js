import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board'
import { setHorsePosition } from '../Actions/BoardActions'

class BoardView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { horsePositions, moveHorse } = this.props;
    return (
      <div className={"FlexCenter"}>
        <Board horsePositions={horsePositions} moveHorse={moveHorse} />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    horsePositions: state.boardReducer.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveHorse: (postPosition, squarePosition) => dispatch(setHorsePosition(postPosition, squarePosition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardView)