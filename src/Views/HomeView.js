import React, { Component } from 'react';
import { connect } from 'react-redux'

class HomeView extends Component {
  render() {
    return (
      <div style={{width: '800px'}}>
        <h1>
          This is the horse racing game and will be the home for all your horse racing needs.
        </h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)