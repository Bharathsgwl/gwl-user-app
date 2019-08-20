import React from 'react';
import {AppBar,Toolbar,Typography,Button,Grid} from '@material-ui/core';
import './index.css';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';
import Instructionspage from '../MidSection/InstructionsPage';

class Header extends React.Component{
  render(){
    return(
      <Router>
      <Grid container>
      <AppBar  position="static"  color="default">
      <Toolbar>
      <Grid item md={4}>
      <Typography classes={{root:"MuiAppBar"}} variant="h6" color="#607D8B">
      GoodWorkLabs Colloquio
      </Typography>
      </Grid>

      <Grid item md={4}>
      <Button classes={{root:"typo"}}  color="inherit" >
      <NavLink to="/Instructionspage" >
    Candidate Portal </NavLink>
      </Button>
      </Grid>
      </Toolbar>
      </AppBar>
      </Grid>

      <Route exact path="/Instructionspage" component={Instructionspage} />
      </Router>
    );
  }
}
export default Header;
