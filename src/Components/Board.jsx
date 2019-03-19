import React, { Component } from 'react';
import { Lane } from './Lane';
import { connect } from 'react-redux'
import { horses } from '../Data/Horses';
import ScratchLine from './ScratchLine'
import { Paper } from '@material-ui/core';

class Board extends Component {
  render() {
    const { horsePositions } = this.props;
    return (
      <div className={"FlexCenter"}>
        <Paper style={{ backgroundColor: '#c79157' }} className={"BoardBackground BoardPadding InlineBlock"} elevation={10} >
          <div className={"ScatchedWords"}>S C R A T C H E D</div>
          <ScratchLine />
          {
            horsePositions.map((horsePosition, idx) =>
              <Lane key={idx} subsequent={idx} horse={horses[idx]} horsePosition={horsePosition} />
            )
          }
          <ScratchLine />
          <div className={"ScatchedWords"}>S C R A T C H E D</div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    horsePositions: state.gamePlayReducer.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
