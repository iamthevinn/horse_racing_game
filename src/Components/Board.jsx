import React, { Component } from 'react';
import { Lane } from './Lane';
import { connect } from 'react-redux'
import { horses } from '../Data/Horses';
import  ScratchLine from './ScratchLine'

class Board extends Component {
  render() {
    const { horsePositions } = this.props;
    return (
      <div>
        <div className={"ScatchedWords"}>S C R A T C H E D</div>
        <ScratchLine />
        {
          horsePositions.map((horsePosition, idx) =>
            <Lane key={idx} subsequent={idx} horse={horses[idx]} horsePosition={horsePosition} />
          )
        }
        <ScratchLine />
        <div className={"ScatchedWords"}>S C R A T C H E D</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    horsePositions: state.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
