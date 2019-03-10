import React, { Component } from 'react';
import { Square } from './Square';

export class Row extends Component {
  constructor(props) {
    super(props);
    this.createRow = this.createRow.bind(this);
  }

  createRow(rowLength, rowId) {
    let row = [];
    for (let i = -5; i < rowLength; i++) {
      row.push(<Square subsequent={i > -5} key={i} rowId={rowId} position={i} />);
    }
    return row;
  }

  render() {
    const { length, subsequent, rowId } = this.props;
    const rowStyle = subsequent ? "SubsequentRow RowStyle" : "RowStyle";
    return ( 
      <div className={rowStyle} >
        {this.createRow(length, rowId)}
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