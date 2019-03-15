import React, { Component } from 'react';
import { connect } from 'react-redux'

class GameStatsView extends Component {
  render() {
    return (
      <div style={{width: '800px'}}>
        GameStats
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

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsView)