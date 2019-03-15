import React, { Component } from 'react';
import { connect } from 'react-redux'
import Board from '../Components/Board';

class GameView extends Component {
  render() {
    return (
      <div>
        {/* <div className={"FlexCenter GameTitle"}>
          The Horse Race Game
        </div> */}
        <div className={"FlexCenter"}>
          <Board />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameView)