import React, { Component } from 'react';
import { connect } from 'react-redux'

class Sqare extends Component {
  constructor() {
    super(props);
    this.state = {
      occupied: false
    }
    this.toggleOccupied = this.toggleOccupied.bind(this);
  }

  toggleOccupied() {
    this.setState({ occupied: !occupied });
  }

  render() {
    return (
      <div>
        
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