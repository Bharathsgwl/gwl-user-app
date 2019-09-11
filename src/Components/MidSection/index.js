import React from 'react';
import './index.css';
import InstructionsPage from './InstructionsPage';
import {Button,Grid,Paper,Checkbox,Box} from '@material-ui/core';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';
import ExamSection from "./ExamSection";
import QuestionSection from './QuestionSection';
import {connect} from 'react-redux';
import {handleOnChange,onClickStart} from '../../redux/actions';
const MidSection =(props)=>{
  console.log(props);
  const {disabled,rule,history}=props;
    return(
      <div>
        <InstructionsPage rule={rule}  handleOnChange={e=>{handleOnChange("disabled",e.target.checked)}}  disabled={disabled} onClickStart={onClickStart(history)}/>
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
  onClickStart:(history)=>{
    dispatch(onClickStart(history))
  }
})
  }
export default connect(mapStateToProps,mapDispatchToProps) (MidSection);
// handleOnStart=()=>{
//   const {history}=this.props
//   history.push('/user/ExamSection');
// }
//
// handleOnChange= (e)=>{
//   this.setState({disabled: !e.target.checked});
//   console.log("checked")
// }
