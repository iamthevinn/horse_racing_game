import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export const CustomAppBar = (props) => {
  const { pageName } = props;

  const styles = {
    appBar: {
      backgroundColor: '#EEB21E',
      marginBottom: '10px'
    }
  }

  return (
    <AppBar style={styles.appBar} position="static">
      <Toolbar>
        <IconButton aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {pageName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}