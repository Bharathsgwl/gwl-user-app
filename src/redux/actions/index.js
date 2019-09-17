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
export const handleFieldChange=(property1,value1,propertyObject="login")=>{
  return{
    type:actionTypes.HANDLE_FIELD_CHANGE,
    payload:{
      property1,value1,propertyObject
    }
  }
}
export const onClickLogin=(history)=>{
  return{
    type:actionTypes.ON_CLICK_LOGIN,
    payload:{
      history
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
  export const handleOnClickSubmit=()=>{
    return{
      type:actionTypes.HANDLE_ON_CLICK_SUBMIT
    };
}
export const handleOnClose=()=>{
  return{
    type:actionTypes.HANDLE_ON_CLOSE
  };
}
export const handleOnSnackBarClose=()=>{
  return{
    type:actionTypes.HANDLE_ON_SNACKBAR_CLOSE
  };
}
export const handleOnClickOk=(history)=>{
  return{
    type:actionTypes.HANDLE_ON_CLICK_OK,
    payload:{
      history
    }
  };
}
export const handleOnLogout=(history)=>{
  return{
    type:actionTypes.HANDLE_ON_LOGOUT,
    payload:{
      history
    }
  };
}
