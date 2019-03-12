import React, { Component } from 'react';
import Square from './Square';

export class Lane extends Component {
  constructor(props) {
    super(props);
    this.drawLane = this.drawLane.bind(this);
  }

  drawLane(laneLength, horse, horsePosition, colours) {
    let lane = [];
    for (let i = -5; i < laneLength; i++) {
      lane.push(<Square subsequent={i > -5} key={i} horse={horse} position={i} occupied={horsePosition === i} colours={colours} />);
    }
    return lane;
  }

  render() {
    const { length, subsequent, horse, horsePosition, colours } = this.props;
    const laneStyle = subsequent ? "SubsequentLane LaneStyle" : "LaneStyle";
    return ( 
      <div className={laneStyle} >
        {this.drawLane(length, horse, horsePosition, colours)}
      </div>
    );
  }
}
