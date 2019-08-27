import React from 'react';
import './index.css';
import {Paper,Button} from '@material-ui/core';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const QuestionSection=({questionList=[],handleChange,handleonNext,index,capture,disabled})=>(
  <div>
{(
  <Paper key={index+1}  classes={{root:"instruction-line"}}> <ul>{index+1}{"."} {questionList[index].questionname}
  {questionList[index].options.map((o,index) => ( <RadioGroup key={index+1} value={o.value}><FormControlLabel value={o}  onChange={handleChange} control={<Radio />}  label={o} style={{display:"inline-block"}}/></RadioGroup> ))}
  <Button variant="contained" color="primary" onClick={handleonNext} classes={{root:"nextbuttonstyle"}} disabled={!disabled}>Next</Button>
  </ul>
  </Paper>
)}
<
div className = "timer-captures" > {capture.map((ans, index) => {
    return <p key={index}>{"ans " + (index + 1) + " -- " + ans}</p>
  })
} </div>
</div>


);

export default QuestionSection;
