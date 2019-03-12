import React, { Component } from 'react';
import { Lane } from './Lane';
import { connect } from 'react-redux'
import ColourTwo from '../Assets/horse_2.png';
import ColourThree from '../Assets/horse_3.png';
import ColourFour from '../Assets/horse_4.png';
import ColourFive from '../Assets/horse_5.png';
import ColourSix from '../Assets/horse_6.png';
import ColourSeven from '../Assets/horse_7.png';
import ColourEight from '../Assets/horse_8.png';
import ColourNine from '../Assets/horse_9.png';
import ColourTen from '../Assets/horse_10.png';
import ColourEleven from '../Assets/horse_11.png';
import ColourTwelve from '../Assets/horse_12.png';

class Board extends Component {
  render() {
    const { horsePositions } = this.props;
    return (
      <div>
        <Lane colours={ColourTwo} horse={'two'} length={3} horsePosition={horsePositions.two} />
        <Lane colours={ColourThree} horse={'three'} subsequent length={4} horsePosition={horsePositions.three} />
        <Lane colours={ColourFour} horse={'four'} subsequent length={5} horsePosition={horsePositions.four} />
        <Lane colours={ColourFive} horse={'five'} subsequent length={6} horsePosition={horsePositions.five} />
        <Lane colours={ColourSix} horse={'six'} subsequent length={7} horsePosition={horsePositions.six} />
        <Lane colours={ColourSeven} horse={'seven'} subsequent length={8} horsePosition={horsePositions.seven} />
        <Lane colours={ColourEight} horse={'eight'} subsequent length={7} horsePosition={horsePositions.eight} />
        <Lane colours={ColourNine} horse={'nine'} subsequent length={6} horsePosition={horsePositions.nine} />
        <Lane colours={ColourTen} horse={'ten'} subsequent length={5} horsePosition={horsePositions.ten} />
        <Lane colours={ColourEleven} horse={'eleven'} subsequent length={4} horsePosition={horsePositions.eleven} />
        <Lane colours={ColourTwelve} horse={'twelve'} subsequent length={3} horsePosition={horsePositions.twelve} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    horsePositions: state.horsePositions
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
