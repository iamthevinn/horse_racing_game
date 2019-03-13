import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHorsePosition } from '../Actions/GamePlayActions';

class Square extends Component {
  constructor(props) {
    super(props);
    this.setHorsePostion = this.setHorsePostion.bind(this);
  }

  setHorsePostion(postPosition, squarePosition) {
    const { moveHorse } = this.props;
    moveHorse(postPosition, squarePosition);
  }

  render() {
    const { subsequent, horse, squarePosition, occupied } = this.props;
    const squareStyle = subsequent ? "SubsequentSquare Square" : "Square";
    return (
      <div>
        {
          !occupied ?
            <div className={squareStyle} onClick={() => this.setHorsePostion(horse.postPosition, squarePosition)} />
            :
            <div className={squareStyle} onClick={() => this.setHorsePostion(horse.postPosition, squarePosition)}>
              <img style={{ height: '100%', width: '100%' }} alt="horse head" src={horse.cloth} />
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
    moveHorse: (postPosition, squarePosition) => dispatch(setHorsePosition(postPosition, squarePosition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
