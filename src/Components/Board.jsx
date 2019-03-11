import React, { Component } from 'react';
import { Lane } from './Lane';
import { connect } from 'react-redux'

class Board extends Component {
  render() {
    const { horsePositions } = this.props;
    return (
      <div>
        <Lane horse={'two'} length={3} horsePosition={horsePositions.two} />
        <Lane horse={'three'} subsequent length={4} horsePosition={horsePositions.three} />
        <Lane horse={'four'} subsequent length={5} horsePosition={horsePositions.four} />
        <Lane horse={'five'} subsequent length={6} horsePosition={horsePositions.five} />
        <Lane horse={'six'} subsequent length={7} horsePosition={horsePositions.six} />
        <Lane horse={'seven'} subsequent length={8} horsePosition={horsePositions.seven} />
        <Lane horse={'eight'} subsequent length={7} horsePosition={horsePositions.eight} />
        <Lane horse={'nine'} subsequent length={6} horsePosition={horsePositions.nine} />
        <Lane horse={'ten'} subsequent length={5} horsePosition={horsePositions.ten} />
        <Lane horse={'eleven'} subsequent length={4} horsePosition={horsePositions.eleven} />
        <Lane horse={'twelve'} subsequent length={3} horsePosition={horsePositions.twelve} />
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
