import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { getDiceRollsByFrequency, getMoneyPaidByRace, getWinnersByFrequency } from './StatsHelper'

const Point = (props) => {
  const { style, ...restProps } = props;
  return (
    <BarSeries.Point
      style={{ ...style, animationDuration: `${(restProps.index + 1) * 0.3}s` }}
      {...restProps}
    />
  );
};

class Winners extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Paper>
          <Chart
            data={getWinnersByFrequency(history)}
          >
            <ValueScale name="frequency" />
            <ValueScale name="winner" />

            <ArgumentAxis />
            <ValueAxis scaleName="frequency" showGrid={true} />

            <BarSeries
              name="Times Won"
              valueField="frequency"
              argumentField="winner"
              scaleName="frequency"
              pointComponent={Point}
              width='30px'
            />
            <Animation />
            <Legend />
          </Chart>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.gamePlayReducer.history
  };
};

export default connect(mapStateToProps)(Winners)