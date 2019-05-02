import React, { Component } from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RollsByNumber from '../Stats/RollsByNumber';
import Winners from '../Stats/Winners';
import ChipsPaid from '../Stats/ChipsPaid';
import ScratchedRollsByNumber from '../Stats/ScratchedRollsByNumber';

class GameStatsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphType: "N/A"
    }
    this.handleGraphTypeChange = this.handleGraphTypeChange.bind(this);
  }

  handleGraphTypeChange(e) {
    this.setState({graphType: e.target.value});
  }

  render() {
    const { graphType } = this.state;
    const graphToDisplay = graphType === 'rollsByNumber' ? <RollsByNumber /> : graphType === 'winners' ? <Winners /> : graphType === 'chipsPaid' ? <ChipsPaid /> : graphType === 'scratches' ? <ScratchedRollsByNumber /> : <div></div>;
    return (
      <div>
        <Paper style={{marginBottom: '20px'}}>
          <FormControl style={{width: '100%'}}>
            <InputLabel shrink htmlFor="graph-simple">Graph Type</InputLabel>
            <Select
              value={this.state.graphType}
              onChange={this.handleGraphTypeChange}
              inputProps={{
                name: 'graphSelect',
                id: 'graph-simple',
              }}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={"rollsByNumber"}>Rolls By Number</MenuItem>
              <MenuItem value={"winners"}>Winners</MenuItem>
              <MenuItem value={"chipsPaid"}>Chips Paid</MenuItem>
              <MenuItem value={"scratches"}>Times Scratched</MenuItem>
            </Select>
        </FormControl>
        </Paper>
        {graphToDisplay}
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