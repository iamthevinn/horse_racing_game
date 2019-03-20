import React, { Component } from 'react';
import { connect } from 'react-redux'

class BoardView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{width: '800px'}}>
        <h1>
          BoardView
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardView)