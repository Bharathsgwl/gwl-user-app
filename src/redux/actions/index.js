import * as actionTypes from '../actionTypes';

export const handleOnChange=(property,value)=>{
  return{
    type:actionTypes.HANDLE_ON_CHANGE,
    payload:{
    property,
    value
  }
};
};

export const onClickStart=(history)=>{
  return{
    type:actionTypes.ON_CLICK_START,
    payload:{
      history
    }
  };
};

export const handleOnClickNext=(history)=>{
  return{
    type:actionTypes.HANDLE_ON_CLICK_NEXT,
    payload:{
      history
    }
  };
}
  export const handleOnClickPrevious=()=>{
    return{
      type:actionTypes.HANDLE_ON_CLICK_PREVIOUS
    };
};


export const handleOnOption=(e)=>{
  return{
    type:actionTypes.HANDLE_CHANGE_OPTION,
    payload:{
    e
    }
  };
};
export const handleOnOptioncapture=()=>{
  return{
    type:actionTypes.HANDLE_ON_OPTION_CAPTURE
  };
}
  export const handleOnClickSubmit=(history)=>{
    return{
      type:actionTypes.HANDLE_ON_CLICK_SUBMIT,
      payload:{
        history
      }
    };
}
