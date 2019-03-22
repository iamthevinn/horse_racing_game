import React, { Component } from 'react';
import { connect } from 'react-redux'
import horse_head from '../Assets/horse_head.png';

class HomeView extends Component {
  render() {
    return (
      <div >
        <h1 className={"FlexCenter"} >
          This is the horse racing game and will be the home for all your horse racing needs.
        </h1>
        <div className={"FlexCenter"} >
          <img alt='horse_head' src={horse_head} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)