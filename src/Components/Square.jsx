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
    const { subsequent, rowId, position } = this.props;
    //const classStyle = occupied ? "OccupiedSquare" : "UnoccupiedSquare";
    const classSyle = subsequent ? "SubsequentSquare UnoccupiedSquare" : "UnoccupiedSquare";
    return (
      <div className={classSyle}>
        {rowId} {position}
      </div>
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