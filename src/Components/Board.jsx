import React, { Component } from 'react';
import { Lane } from './Lane';
import { connect } from 'react-redux'
import { horses } from '../Data/Horses';

class Board extends Component {
  render() {
    const { horsePositions } = this.props;
    return (
      <div className={"InlineBlock"}>
        {
          horsePositions.map((horsePosition, idx) =>
            <Lane key={idx} subsequent={idx} horse={horses[idx]} horsePosition={horsePosition} />
          )
        }
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
