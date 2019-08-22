import React from 'react';
import './index.css';

// import {Timer} from 'react-compound-timer';
import {Grid,Button,AppBar,Toolbar,Typography} from '@material-ui/core';

class ExamSection extends React.Component{
state={
  timerStarted:true,
  timerStopped:true,
  hours:0,
  minutes:30,
  seconds:1,
  capture:[]
}
handleTimerStart(){

  if(this.state.timerStopped){
    this.timer=setInterval(()=>{
      this.setState({timerStarted:true,timerStopped:false})
      if(this.state.timerStarted){
        if(this.state.seconds >=60){
          this.setState((prevState)=>({minutes:prevState.minutes-1,seconds:0}));
        }
        if(this.state.minutes >=30){
          this.setState((prevState)=>({minutes:prevState.minutes}))
        }
        this.setState((prevState)=>({seconds:prevState.seconds+1}));
        if (this.state.minutes <=0) {
    clearInterval(this.timer);
    alert("sesion expired")
  }
      }
    },1000)
  }
         }
         handleTimerStop(e){
           e.preventDefault();
           this.setState({timerStarted:false,timerStopped:true})
           clearInterval(this.timer);
         }
         handleTimerCapture(){
           this.setState(prevState=>({
             capture:[
               ...prevState.capture,
               this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds
             ]
           }));
         }
         componentWillMount=()=>{
console.log("this.handleTimerStart.bind(this)");
           this.handleTimerStart(this);

         }

  render(){
const {questions}=this.state
    return(
      <React.Fragment>
      <AppBar position="fixed" classes={{root:"examheadingcolor"}} color="white">
      <Toolbar >
      <Grid container>
      <Grid item md={10}>
      <Typography >
      ExamSection
      </Typography>
      </Grid>

     <Grid item md={2} >
       <Typography classes={{root:"remainingtimecolor"}}>remaining time:
        <b > {this.state.hours+":"+this.state.minutes+":"+this.state.seconds}</b></Typography>
      </Grid>
 </Grid>
      </Toolbar>
      </AppBar>



      </React.Fragment>
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
