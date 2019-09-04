import React from 'react';
import './index.css';
import {Button,Grid,Paper,Checkbox,Box} from '@material-ui/core';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';
import RuleList from '../RuleList';
import ExamSection from "../ExamSection";
import Header from '../../Header';

const InstructionsPage=({handleOnChange,disabled,handleOnStart,rule})=>{
    const inner = (
    <Box bgcolor="background.paper" m={1} border={3} style={{ width: '15rem', height: '15rem' }} />
  );
    return(
      <div classes={{root:"Instructionspage-container"}}>
      <div>
      <Header />
      </div>
      <br></br>
      <Grid container justify="center" classes={{root:"instruction-container"}}>
      <Box  display="block" classes={{root:"Box-css"}}bgcolor="background.paper">
      <Grid item-md={4}>
      <h1 classes={{root:"Instructions-font-style"}}>Instructions</h1>
      <b><p  classes={{root:"instruction-font"}}>Read the instructions carefully before entering to the Exam Section: </p></b>
      </Grid>
<Grid item sm={12}>
        <div>
<RuleList rule1={rule} />
    </div>
    </Grid>
<br />
      <Grid item-md={12}>
      <Checkbox  onChange={handleOnChange} />
agree and continue,
      </Grid>
      <Grid item-md={12}>
      <Button variant="contained" color="primary" disabled={disabled}  onClick={handleOnStart}>Start</Button>
      </Grid>
      </Box>
      </Grid>
      </div>
    );
  }

export default InstructionsPage;
