import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHorsePosition } from '../Actions/GamePlayActions';

class Square extends Component {
  constructor(props) {
    super(props);
    this.setHorsePostion = this.setHorsePostion.bind(this);
  }

  setHorsePostion(horse, position) {
    const { moveHorse } = this.props;
    moveHorse(horse, position);
  }

  render() {
    const { subsequent, horse, position, occupied, colours } = this.props;
    //const squareStyle = subsequent ? (occupied ? "SubsequentSquare OccupiedSquare" : "SubsequentSquare UnoccupiedSquare") : (occupied ? "OccupiedSquare" : "UnoccupiedSquare");
    const squareStyle = subsequent ? "SubsequentSquare Square" : "Square";
    return (
      <div>
        {
          !occupied ?
            <div className={squareStyle} onClick={() => this.setHorsePostion(horse, position)} />
            :
            <div className={squareStyle} onClick={() => this.setHorsePostion(horse, position)}>
              <img className={"HorseImage"} alt="horse head" src={colours} />
            </div>
        }
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
    moveHorse: (horse, position) => dispatch(setHorsePosition(horse, position))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
