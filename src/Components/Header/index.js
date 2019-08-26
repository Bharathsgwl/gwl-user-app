import React from 'react';
import {AppBar,Toolbar,Typography,Button,Grid} from '@material-ui/core';
import './index.css';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';
import Instructionspage from '../MidSection/InstructionsPage';

class Header extends React.Component{
  render(){
    return(

      <Grid container>
      <AppBar  position="static"  classes={{root:"appbarstyle"}} colr="default">
      <Toolbar>
      <Grid item md={4}>
      <Typography classes={{root:"MuiAppBar"}} variant="h6" color="#607D8B">
      <Link to="/user" >GoodWorkLabs Colloquio</Link>
      </Typography>
      </Grid>

      <Grid item md={4}>
      <Button classes={{root:"typo"}}  color="inherit" >
      <NavLink to="/user/InstructionsPage" >
    Candidate Portal </NavLink>
      </Button>
      </Grid>
      </Toolbar>
      </AppBar>

      </Grid>


    );
  }
}
export default Header;
