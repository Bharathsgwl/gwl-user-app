import React from 'react';
import './index.css';
import InstructionsPage from './InstructionsPage';
import {Button,Grid,Paper,Checkbox,Box} from '@material-ui/core';
import {BrowserRouter as Router,Route,NavLink,Link} from 'react-router-dom';
import ExamSection from "./ExamSection";
import QuestionSection from './QuestionSection';
class MidSection extends React.Component{
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
        ],
        timerStarted: true,
        timerStopped: true,
        hours: 0,
        minutes: 30,
        seconds: 0,
        capture: [],
        index: 0,
        button: true,
        question: [{
          questionname: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
          options: ["120 mtres", "120 metres", "10 metres", "20 metres "],
          value: []
        }, {
          questionname: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
          options: ["200 mm", "225 mm", "245 mm", "250 mm "],
          value: []
        }, {
          questionname: "	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
          options: ["1:3", "3:2", "3:4", "None of these"],
          value: []
        }, {
          questionname: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
          options: ["45 km/hr", "50 km/hr ", "54 km/hr ", "55 km/hr  "],
          value: []
        }]
  }
  handleOnStart=()=>{
    const {history}=this.props
    history.push('/user/ExamSection');
  }

  handleOnChange= (e)=>{
    this.setState({disabled: !e.target.checked});
    console.log("checked")
}
handleTimerStart() {
  if (this.state.timerStopped) {
this.timer = setInterval(() => {
  this.setState({
    timerStarted: true,
    timerStopped: false
  })
  if (this.state.timerStarted) {
    if (this.state.seconds >= 60) {
      this.setState((prevState) => ({
        minutes: prevState.minutes - 1,
        seconds: 0
      }));
    }
    if (this.state.minutes >= 30) {
      this.setState((prevState) => ({
        minutes: prevState.minutes
      }))
    }
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
    if (this.state.minutes <= 0) {
      clearInterval(this.timer);
      alert("sesion expired")
    }
  }
}, 1000)
}
}
handleTimerStop() {
  const {history}=this.props;
  this.setState({
    timerStarted: false,
    timerStopped: true
  })
  clearInterval(this.timer);
  history.push("/user/logoutsection");
  alert("sesion expired")
  // window.location.pathname="/user/logoutsection";
}

handleTimerCapture() {
  this.setState(prevState => ({
    capture: [
      ...prevState.capture,
      this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
    ]
  }));
}
componentWillMount = () => {
  console.log("this.handleTimerStart.bind(this)");
  this.handleTimerStart(this);
}

handleOnOptioncapture = () => {
  this.setState(prevState => ({
    capture: [
      ...prevState.capture,
       this.state.value
    ]
  }));

}
handleChange = event => {
  const {options} = this.state
  this.setState({
    value: event.target.value
  });
};
handleOnClickNext=()=>{
  const {history}=this.props;
  const {question,button,disabled,capture}=this.state;
  let {index}=this.state;
  index=index+1;
  if(question.length===index){
  return(
    this.setState({disabled:!disabled})
  )
  }
  this.setState(prevState=>({
    index,
    capture:[
      ...prevState.capture,
       this.state.value]
  }))

}
handleOnEndTest=()=>{
  const {history}=this.props
  this.handleTimerStop();
  history.push("/user/logoutsection");
}

  render(){

    const {rule,disabled,question,index,hours,minutes,seconds,capture}=this.state
    const {handleOnChange,handleOnStart,handleOnEndTest,handleOnClickNext,handleChange,handleOnOptioncapture,componentWillMount,handleTimerStop,handleTimerStart,handleTimerCapture}=this
    return(
      <div>
      <InstructionsPage rule={rule} handleOnChange={handleOnChange} handleOnStart={handleOnStart}  disabled={disabled}/>

      <Route path="/user/ExamSection" render={(props)=>
      <ExamSection question={question} capture={capture} index={index} hours={hours} minutes={minutes} seconds={seconds} handleOnEndTest={handleOnEndTest} handleOnClickNext={handleOnClickNext} handleChange={handleChange} handleOnOptioncapture={handleOnOptioncapture}componentWillMount={componentWillMount}
handleTimerStop={handleTimerStop} handleTimerStart={handleTimerStart} handleTimerCapture={handleTimerCapture}
       isAuthed={true} {...props}/>} />
  </div>
    );
  }
}
export default MidSection;
