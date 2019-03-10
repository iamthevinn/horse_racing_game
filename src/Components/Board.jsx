import React, { Component } from 'react';
import { black } from 'ansi-colors';
import { Row } from './Row';
import { connect } from 'react-redux'

export class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row rowId={2} length={3} />
        <Row rowId={3} subsequent length={4} />
        <Row rowId={4} subsequent length={5} />
        <Row rowId={5} subsequent length={6} />
        <Row rowId={6} subsequent length={7} />
        <Row rowId={7} subsequent length={8} />
        <Row rowId={8} subsequent length={7} />
        <Row rowId={9} subsequent length={6} />
        <Row rowId={10} subsequent length={5} />
        <Row rowId={11} subsequent length={4} />
        <Row rowId={12} subsequent length={3} />
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