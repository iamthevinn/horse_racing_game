import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Chart, ArgumentAxis, ValueAxis, LineSeries, BarSeries } from "@devexpress/dx-react-chart-material-ui";


class GameStatsView extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "50%"}}>
          <Chart 
            data={[
              { argument: 1, value: 10 },
              { argument: 2, value: 20 },
              { argument: 3, value: 30 }
            ]}
          >
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries valueField="value" argumentField="argument" />
          </Chart>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsView)