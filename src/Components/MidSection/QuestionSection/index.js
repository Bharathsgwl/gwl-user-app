import React from 'react';
import './index.css';
import {Paper,Button,Grid} from '@material-ui/core';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {handleOnOption,handleOnClickNext,handleOnOptioncapture,handleOnClickPrevious,handleOnClickSubmit} from '../../../redux/actions';

const QuestionSection=(props)=>{
  console.log(props)
  const {question=[],handleOnOption,handleOnClickNext,index,disabled,handleOnOptioncapture,capture,handleOnClickPrevious,history,handleOnClickSubmit,disabled2,disabled3}=props;
  console.log(capture);
  console.log(question);
  return(
<div>
  <Paper key={index+1}  classes={{root:"instruction-line"}}> <ul>{index+1}{"."} {question[index].questionname}
  <RadioGroup key={index+1}   onChange={(e)=>{handleOnOption(e.target.value)}} value={question[index].value}>{question[index].options.map((o,index) => (<FormControlLabel value={o}  control={<Radio />}  label={o} style={{display:"flex"}}/> ))}</RadioGroup>
<Button variant="contained" color="primary" onClick={handleOnClickNext} classes={{root:"nextbuttonstyle"}} capture={capture} disabled={!disabled2}>Next</Button>
<Button   classes={{root:"previousbutton"}} variant="contained" color="primary" onClick={handleOnClickPrevious} capture={capture} disabled={disabled}>Previous</Button>
</ul>
</Paper>
<Button color="primary" variant="contained" style={{float:"left"}} onClick={()=>{handleOnClickSubmit(history)}} disabled={disabled3}>Submit</Button>
</div>
);
}

const mapStateToProps=({index,question,disabled,capture,disabled2,disabled3})=>{
  return{
    disabled,question,index,capture,disabled2,disabled3
  };
}
const mapDispatchToProps=dispatch=>{
    return({
      handleOnClickNext:()=>{
        dispatch(handleOnClickNext())
      },
      handleOnClickPrevious:()=>{
        dispatch(handleOnClickPrevious())
      },
      handleOnOption:(optionname)=>{
        dispatch(handleOnOption(optionname))
      },
      handleOnOptioncapture:()=>{
        dispatch(handleOnOptioncapture())
      },
      handleOnClickSubmit:(history)=>{
        dispatch(handleOnClickSubmit(history))
      }
    })

  }


export default connect(mapStateToProps,mapDispatchToProps) (withRouter(QuestionSection));
