import React from 'react';
import './index.css';
import {Button,Grid,Paper,Checkbox,Box} from '@material-ui/core';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';
import ExamSection from "../ExamSection";
import Header from '../../Header';
import {connect} from 'react-redux';
import {handleOnChange,onClickStart} from '../../../redux/actions';
import {withRouter} from 'react-router-dom';

const InstructionsPage=(props)=>{
  console.log(props);
  const {rule,handleOnChange,disabled,history,onClickStart}=props
    const inner = (
    <Box bgcolor="background.paper" m={1} border={3} style={{ width: '15rem', height: '15rem' }} />
  );
    return(
      <div classes={{root:"Instructionspage-container"}}>
      <div>
      <Header/>
      </div>
      <br></br>
      <Grid container justify="center" classes={{root:"instruction-container"}}>
      <Box  display="block" classes={{root:"Box-css"}}bgcolor="background.paper">
      <Grid item-md={4}>
      <h1 classes={{root:"Instructions-font-style"}}>Instructions</h1>
      <b><p  classes={{root:"instruction-font"}}>Read the instructions carefully before entering to the Exam Section: </p></b>
      </Grid>
<Grid item sm={12}>
{rule.map( (r,index) => (
  <ul><li><Paper key={index}  classes={{root:"instruction-line"}}>{r.rulename}</Paper></li></ul>
))}
    </Grid>
<br />
      <Grid item-md={12}>
      <Checkbox  onChange={e=>{handleOnChange("disabled",!e.target.checked)}} />
agree and continue,
      </Grid>
      <Grid item-md={12}>
      <Button variant="contained" color="primary" disabled={disabled}  onClick={()=>{onClickStart(history)}}>Start</Button>
      </Grid>
      </Box>
      </Grid>
      </div>
    );
  }
  const mapStateToProps=({disabled,rule})=>{
    return{
      disabled,rule
    };
  }
  const mapDispatchToProps=dispatch=>{
return({
  handleOnChange:(property,value)=>{
    dispatch(handleOnChange(property,value))
  },
  onClickStart:(history)=>dispatch(onClickStart(history))
})
  }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(InstructionsPage));
