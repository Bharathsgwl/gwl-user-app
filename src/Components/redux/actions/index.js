import * as actionTypes from '../actionTypes';

export const handleOnChange=(property,value)=>{
  return{
    type:actionTypes.HANDLE_ON_CHANGE,
    payload{:
    property,
    value
  }
};

export const onClickStart=()=>{
  return{
    type:actionTypes.ON_CLICK_START
  };
};
