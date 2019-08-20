import React from 'react';
import './index.css';
import {Button,Grid,Paper,Checkbox,Box} from '@material-ui/core';
import RuleList from '../RuleList';
class InstructionsPage extends React.Component{
state = {
        disabled:true,
        rule:[{
          rulename: "This test contains only Aptitude Section,This test contains following sections are Quantitative and Logical Reasoning."
        },
          {
            rulename :"Quantitative Aptitude  section consists of maths questions from the topics like algebra, time & work, time, speed & distance, arithmetic."
          },
          {
            rulename:"Logical Reasoning Aptitude section consists of reasoning based questions from common topics of reasoning skills."
          },
          {
            rulename:"If You tried to open another window the session will expire automaticaly and it will considerd as a mall practice."
          }
      ]
}
  handleOnChange= (e)=>{
    this.setState({disabled: !e.target.checked});
    console.log("checked")
}
  render(){
    const inner = (
    <Box bgcolor="background.paper" m={1} border={3} style={{ width: '15rem', height: '15rem' }} />
  );
  const {rule,instructions,disabled}=this.state
    return(
      <div classes={{root:"Instructionspage-container"}}>
      <br></br>
      <Grid container justify="center">
      <Box  display="block" classes={{root:"Box-css"}}bgcolor="background.paper">
      <Grid item-md={8}>
      <h1 classes={{root:"Instructions-font-style"}}>Instructions</h1>
      <b><p>Read the instructions carefully before entering to the Exam Section: </p></b>
      </Grid>
<Grid item sm={12}>
        <div>
<RuleList rule1={rule} />
    </div>
    </Grid>

      <Grid item-md={12}>
      <Checkbox checked={this.state.checkdA} onChange={this.handleOnChange}
      value="checkdA" >
      </Checkbox>
agree and continue,
      </Grid>
      <Grid item-md={12}>
      <Button variant="contained" color="primary" disabled={disabled} >Start</Button>
      </Grid>
      </Box>
      </Grid>
      </div>
    );
  }
}
export default InstructionsPage;
