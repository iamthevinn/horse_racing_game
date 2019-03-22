import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHorsePosition } from '../Actions/GamePlayActions';

class Square extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subsequent, horse, squarePosition, occupied, moveHorse } = this.props;
    const squareStyle = subsequent ? "SubsequentSquare Square" : "Square";
    return (
      <div>
        {
          !occupied ?
            squarePosition === -1 ?
              <div className={squareStyle + " FlexCenter"} onClick={() => moveHorse(horse.postPosition, squarePosition)}><div className={"GateDot"}/></div>
              :
              <div className={squareStyle} onClick={() => moveHorse(horse.postPosition, squarePosition)} />
            :
            <div className={squareStyle} onClick={() => moveHorse(horse.postPosition, squarePosition)}>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
