import React, { Component } from 'react';
import Square from './Square';

export class Lane extends Component {
  constructor(props) {
    super(props);
    this.drawLane = this.drawLane.bind(this);
  }

  drawLane(horse, horsePosition) {
    let lane = [];
    for (let i = -5; i < horse.laneLength; i++) {
      lane.push(<Square key={i} subsequent={i > -5} horse={horse} squarePosition={i} occupied={horsePosition === i} />);
    }
    return lane;
  }

  render() {
    const { subsequent, horse, horsePosition } = this.props;
    const laneStyle = subsequent ? "SubsequentLane LaneStyle" : "LaneStyle";
    return ( 
      <div className={laneStyle} >
        {this.drawLane(horse, horsePosition)}
      </div>
    );
  }
}
