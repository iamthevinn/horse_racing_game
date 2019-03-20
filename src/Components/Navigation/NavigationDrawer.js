import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import { navigationOptions } from './NavigationOptions'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false
    };
  }

  render() {
    const { classes, open, toggleDrawer } = this.props;

    const sideList = (
      <div className={classes.list}>
        <Link style={{ textDecoration: 'none' }} to={navigationOptions['Home']}>
          <ListItem button key={"Home"}>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Divider />
        <List>
          {['Play Game', 'Game Stats'].map((text) => (
            <Link style={{ textDecoration: 'none' }} key={text} to={navigationOptions[text]}>
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <Link style={{ textDecoration: 'none' }} to={navigationOptions['Board Only']}>
          <ListItem button key={"Board Only"}>
            <ListItemText primary={"Board Only"} />
          </ListItem>
        </Link>
      </div>
    );

    return (
      <div>
        <Drawer open={open} onClose={toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(NavigationDrawer);