import React from 'react'
import Lottie from 'react-lottie';
import {connect} from "react-redux";
const LottieControl=(props)=> {
  console.log(props);
const {isStopped,isPaused,animation,height,width}=props

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (<div>
      <Lottie options={defaultOptions}
              height={height}
              width={width}
              isStopped={isStopped}
              isPaused={isPaused}/>
    </div>);
}
const mapStateToProps=({isStopped,isPaused})=>{
  return{
    isStopped,isPaused
  };
}
export default connect(mapStateToProps,null)(LottieControl);

// <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
// <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
// <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
