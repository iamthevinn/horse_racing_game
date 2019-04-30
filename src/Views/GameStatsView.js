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
import { getDiceRollsByFrequency, getMoneyPaidByRace, getWinnersByFrequency } from '../Stats/StatsHelper'

const Point = (props) => {
  const { style, ...restProps } = props;
  return (
    <BarSeries.Point
      style={{ ...style, animationDuration: `${(restProps.index + 1) * 0.3}s` }}
      {...restProps}
    />
  );
};


class GameStatsView extends Component {
  render() {
    const { history } = this.props;
    console.log()
    return (
      <div>
        <div>
          <Paper>
            <Chart
              data={getDiceRollsByFrequency(history)}
            >
              <ValueScale name="frequency" />
              <ValueScale name="diceTotal" />

              <ArgumentAxis />
              <ValueAxis scaleName="frequency" position={"left"} showGrid={true} showLine showTicks />

              <BarSeries
                name="Times Rolled"
                valueField="frequency"
                argumentField="diceTotal"
                scaleName="frequency"
                pointComponent={Point}
                width='30px'
              />
              <Animation />
              <Legend />
            </Chart>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    history: state.gamePlayReducer.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GameStatsView)