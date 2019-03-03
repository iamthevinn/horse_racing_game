import React, { Component } from 'react';
import { connect } from 'react-redux'

class GameView extends Component {
  render() {
    return (
      <div>
        GameView
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