import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';


const Header = () => {
  return (
    <AppBar position="static">
        <Toolbar className={classes.Toolbar}>
            <Typography variant="h5" className={classes.title}>

            </Typography>
        </Toolbar>
    </AppBar>
  )
};

export default Header;
