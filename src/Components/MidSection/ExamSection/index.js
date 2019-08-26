import React from 'react';
import './index.css';
import QuestionSection from '../QuestionSection';
// import {Timer} from 'react-compound-timer';
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Paper
} from '@material-ui/core';
import Radio, {
  RadioProps
} from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class ExamSection extends React.Component {
  state = {
    timerStarted: true,
    timerStopped: true,
    hours: 0,
    minutes: 30,
    seconds: 1,
    capture: [],
    index:0,
    button:true,
    question: [{
      questionname: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 mtres", "120 metres", "10 metres", "20 metres "],value: []
    }, {
      questionname: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: ["200 mm", "225 mm", "245 mm", "250 mm "],value: []
    },{
      questionname: "	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      options: ["1:3", "3:2", "3:4", "None of these"],value: []
    },{
      questionname: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: ["45 km/hr", "50 km/hr ", "54 km/hr ", "55 km/hr  "],value: []
    }],


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
    this.setState({
      timerStarted: false,
      timerStopped: true
    })
    clearInterval(this.timer);
    alert("sesion expired")
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
    const {history}=this.props
    const {question,button}=this.state
    let {index}=this.state
    index=index+1;
    if(question.length===index){
    return(
    history.push('/user')
    )
    }

this.setState(prevState=>({
  index,
}))

  }


  render() {
    const {
      question,index,
      value
    } = this.state

    const {
      handleOnOptioncapture
    } = this

    return ( <
      React.Fragment >
      <
      AppBar position = "fixed"
      classes = {
        {
          root: "examheadingcolor"
        }
      }
      color = "white" >
      <
      Toolbar >
      <
      Grid container classes = {
        {
          root: 'ExamSectionscolor'
        }
      } >
      <
      Grid item md = {
        10
      } >
      <
      Typography >
      ExamSection <
      /Typography> <
      /Grid> <
      Grid item md = {
        2
      } >
      <
      Typography classes = {
        {
          root: "remainingtimecolor"
        }
      } > remaining time:
      <
      b > {
        this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
      } < /b></Typography >
      <
      /Grid> <
      /Grid> <
      /Toolbar> <
      /AppBar> <
      br / >
      <
      br / >
      <
      br / >
      <
      br / >
      <
      Grid item md = {
        12
      }
      color = "default" >
      <QuestionSection questionList = {
        question
      }
      capture={this.state.capture}
      index = {index}
      handleChange = {
        this.handleChange
      } handleonNext={this.handleOnClickNext.bind(this)}
      /> <
      /Grid> <
      Grid item md = {
        12
      } >
      <
      Button color = "primary"
      variant = "contained"
      onClick = {
        handleOnOptioncapture.bind(this)
      } > SubmitAnswer < /Button> <
      /Grid> <
      div className = "timer-captures" > {
        this.state.capture.map((ans, index) => {
          return <p>{"ans " + (index + 1) + " -- " + ans}</p>
        })
      } </div>

      </React.Fragment>
     //  <Grid item md={4} classes={{root:"display-timer"}}>
     //     <Button variant="contained" color="secondary" onClick={this.handleOnOptioncapture.bind(this)}>capture Timer </Button>
     //     </Grid>
     //     <div className="timer-captures">
     //   { this.state.capture.map((value, index) => {
     //      return <p>{ "Capture " + ( index + 1 ) + " -- " + value }</p>
     //   })}
     // </div>
      //   {question.map((q,index)=>(
      //     <Paper key={index}>{q.options.map((o) => ( <RadioGroup value={this.state.value}> <FormControlLabel value={o} control={<Radio />} onChange={this.handleChange} label={o} style={{display:"inline-block"}}/></RadioGroup> ))}
      // </Paper>
      //   ))}


      // <QuestionSection questionList={question} handleOnOption={handleOnOption}/>
      // <Grid item md={12} classes={{root:"display-timer"}}>
      // <h2>React Based Time:</h2>
      // </Grid>
      //     <Grid item md={4} classes={{root:"display-timer"}} >
      //     <Button variant="contained" color="primary" onClick={this.handleTimerStart.bind(this)}>Start Timer</Button>
      //     </Grid>
      //     <Grid item md={4} classes={{root:"display-timer"}}>
      //     <Button variant="contained" color="secondary" onClick={this.handleTimerStop.bind(this)}>Stop Timer </Button>
      //     </Grid>
      //     <Grid item md={4} classes={{root:"display-timer"}}>
      //     <Button variant="contained" color="secondary" onClick={this.handleTimerCapture.bind(this)}>capture Timer </Button>
      //     </Grid>
      //     <div className="timer-captures">
      //   { this.state.capture.map((time, index) => {
      //      return <p>{ "Capture " + ( index + 1 ) + " -- " + time }</p>
      //   })}
      // </div>

    );
  }
}
export default ExamSection;
//   state = {
//     date :new Date(),
//     // hours : date.getHours(),
//     // minutes :  date.getMinutes(),
//     // time : hours + ":" + minutes,
//     count : 0
//   };
//  countDown = ()=>{
//   const {count} = this.state;
//   let {countHours} =  new Date().getHours()+2;
//   let {countMinutes} = new Date().getMinutes() + 0;
//   this.setState({
//     count : (countHours-new Date().getHours()) + (countMinutes - new Date().getMinutes())
//   })
// };
//
//   render(){
//
//     const {count,countDown}=this.state
//     return(
// <div>
// <Button onClick = {this.countDown} count = {count}>Click Me</Button>
// <p>{this.state.date}</p>
// <p>{count}</p>
//
// </div>
//     );
//   }
// }
// export default ExamSection;
// this is another part
// state={
//   date:new Date(),
//   now:new Date(),
//   hours:"",
//   minutes:"",
//   seconds:"",
//   time:{"hours":"h","minutes":"m ","seconds": "s "}
//
// }
// handleOnTimer=()=>{
//   const{time,date,now,hours,minutes,seconds}=this.state
//   this.setState({
//     countDownDate:new Date().setHours(countDownDate.getHours()+3),
//    distance:countDownDate-now,
//    hours : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//    minutes : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//    seconds : Math.floor((distance % (1000 * 60)) / 1000),
//   time: hours + "h"+ minutes + "m " + seconds + "s "
//   })
// }
// render(){
//   const {handleOnTimer}=this
//   return(
//     <div>
//     <Header />
//     <Grid container>
//
//     <h3>This is the exam Section </h3>
//     {this.state.time}
//     </Grid>
//     </div>
//
//   );
// }
// }
