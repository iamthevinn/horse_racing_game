import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import invert from 'lodash/invert';
import { navigationOptions } from './NavigationOptions'

export const CustomAppBar = (props) => {
  const { onMenuClick, pathname } = props;
  const styles = {
    appBar: {
      backgroundColor: '#EEB21E',
      marginBottom: '10px'
    }
  }
  
  return (
    <AppBar style={styles.appBar} position="static">
      <Toolbar>
        <IconButton onClick={onMenuClick} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {invert(navigationOptions)[pathname]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}