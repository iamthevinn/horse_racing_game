import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
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

            <SplineSeries
              name="Money Paid By Race"
              valueField="amount"
              argumentField="raceNumber"
              scaleName="amount"
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

export default connect(mapStateToProps)(ChipsPaid)