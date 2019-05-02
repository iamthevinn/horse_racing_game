import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  Legend,
  LineSeries,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation, EventTracker } from '@devexpress/dx-react-chart';
import { getMoneyPaidByRace } from './StatsHelper'

class ChipsPaid extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Paper>
          <Chart
            data={getMoneyPaidByRace(history)}
          >
            <ValueScale name="amount" />
            <ValueScale name="raceNumber" />

            <ArgumentAxis />
            <ValueAxis scaleName="amount" showGrid={true} />

            <LineSeries
              name="Money Paid By Race"
              valueField="amount"
              argumentField="raceNumber"
              scaleName="amount"
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

export default connect(mapStateToProps)(ChipsPaid)