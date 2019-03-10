import React, { Component } from 'react';
import { black } from 'ansi-colors';
import { Square } from './Square';
import { connect } from 'react-redux'

export class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Square />
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

export default connect(mapStateToProps, mapDispatchToProps)(Board)