import React, { Component } from 'react';

export class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupied: false
    }
    this.toggleOccupied = this.toggleOccupied.bind(this);
  }

  toggleOccupied() {
    this.setState({ occupied: !this.state.occupied });
  }

  render() {
    const { occupied } = this.state;
    return (
      <div className={occupied ? "OccupiedSquare" : "UnoccupiedSquare"} />
    );
  }
}

// const mapStateToProps = state => {

//   return {
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Square)