import * as actionTypes from '..actionTypes';
const applicationIntialState={
  disabled:true
}

const reducer=(state=applicationIntialState,action)=>{
  switch(action.type){
    case actionTypes.HANDLE_ON_CHANGE:
    const {property,value}=action.payload;
    return{

    }
  }
}
