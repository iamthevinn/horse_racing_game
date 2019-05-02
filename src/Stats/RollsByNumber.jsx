import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Legend,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation, EventTracker } from '@devexpress/dx-react-chart';
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

class RollsByNumber extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Paper>
          <Chart
            data={getDiceRollsByFrequency(history)}
          >
            <ValueScale name="frequency" />
            <ValueScale name="diceTotal" />

            <ArgumentAxis />
            <ValueAxis scaleName="frequency" showGrid={true} />

            <BarSeries
              name="Times Rolled"
              valueField="frequency"
              argumentField="diceTotal"
              scaleName="frequency"
              pointComponent={Point}
            />
            <Animation />
            <Legend />
            <EventTracker />
            <Tooltip />
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

export default connect(mapStateToProps)(RollsByNumber)