import React from 'react';
import './index.css';
import {Paper,Button} from '@material-ui/core';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const QuestionSection=({questionList=[],value,handleChange,handleonNext,index,capture})=>(
  <div>
{(
  <Paper key={index+1}  classes={{root:"instruction-line"}}> <ul>{index+1}{"."} {questionList[index].questionname}
  {questionList[index].options.map((o,index) => ( <RadioGroup key={index+1} value={value}><FormControlLabel value={o}  onChange={handleChange} control={<Radio />}  label={o} style={{display:"inline-block"}}/></RadioGroup> ))}
  <Button variant="contained" color="primary" onClick={handleonNext} classes={{root:"nextbuttonstyle"}}>Next</Button>
  </ul>
  </Paper>
)}
</div>


);

export default QuestionSection;
