import * as actionTypes from "../actionTypes";
import axios from "axios";
const applicationIntialState = {
  disabled: true,
  disabled2: false,
  disabled3: true,
  open: false,
  snackBar: {
    snackbarOpen: false
  },
  sessionDetail:{},redirect:true,
  post:[],
  user:[],
  user_detail:{
    user_name:'',uuid:''
  },
  questions:[],
  time:0,

  index: 0,
  capture: [],
  q_lists:[
    {q_id:{},value:''}
  ],
  exam_rules:[],
  length: 2,
  message: "",
  login: {
    username: "",
    password: ""
  }
};

const reducer = (state = applicationIntialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_ON_CHANGE:
      var { property, value } = action.payload;
      var { disabled } = state.disabled;
      return {
        ...state,
        [property]: value
      };
      // case actionTypes.ON_CLICK_LOGIN:
      //   var history = action.payload.history;
      //   debugger
      //   var snackBar = state;
      //   debugger
      //   var {snackbarOpen} = state.snackBar;
      //   const { username, password } = state.login;
      //   var message = state.message;
      //   debugger
      //   snackbarOpen = !snackbarOpen;
      //   debugger;
      //   username === "GWL" && password === "123"
      //     ? history.push("/user/InstructionsPage")
      //     : username == "" && password == ""
      //     ? (message = "Enter Credentials")
      //     : (message = "Invalid Credentials");
      //   debugger;
      //   return {
      //     ...state,
      //     message,
      //     open,
      //     username,
      //     password,
      //     snackbarOpen
      //   };

    case actionTypes.HANDLE_FIELD_CHANGE:
      const { property1, value1, propertyObject } = action.payload;
      console.log(state, value, property1, value1, propertyObject);
      return {
        ...state,
        [propertyObject]: {
          ...state[propertyObject],
          [property1]: value1
        }
      };

    case actionTypes.ON_CLICK_START:
      var { disabled } = state.disabled;
      var history = action.payload.history;
      history.push("/user/ExamSection");
      disabled = !disabled;
      return {
        ...state,
        history,
        disabled
      };
    case actionTypes.HANDLE_CHANGE_OPTION:
      debugger;
      var { e } = action.payload;
      var index = state.index;
      var { capture } = state.capture;
      debugger;
      var { question } = state;
      question[index].value = e;
      capture = question[index].value;

      debugger;
      return {
        ...state,
        question,
        capture
      };
    case actionTypes.HANDLE_ON_CLICK_NEXT:
      var {
        question,
        index,
        disabled,
        disabled2,
        disabled3,
        length,
        capture
      } = state;
      var value = state.question.value;
      var history = action.payload.history;
      index = index + 1;
      debugger;
      for (var i = 1; i < question.length; i++) {
        if (index === i) {
          disabled = false;
        } else if (index > 1 && index === question.length - 1) {
          disabled3 = false;
          disabled2 = true;
        }
      }
      debugger;
      return {
        ...state,
        index,
        disabled,
        disabled2,
        disabled3,
        capture: [...capture]
      };
    case actionTypes.HANDLE_ON_CLICK_PREVIOUS:
      var { question, index, disabled, length, disabled2, capture } = state;
      debugger;
      var value = state.question.value;
      debugger;
      if (index === question.length - 1) {
        disabled2 = false;
      }
      debugger;
      index = index - 1;
      return {
        ...state,
        index,
        disabled,
        disabled2
      };
    case actionTypes.HANDLE_ON_OPTION_CAPTURE:
      var { value } = state.question;
      debugger;
      var { capture } = state;
      debugger;
      return {
        capture: [...state.capture, value]
      };
    case actionTypes.HANDLE_ON_CLICK_SUBMIT:
      var { open } = state;
      open = !open;
      axios.post("http://localhost:8080/api/candidate_answer").then(response => {
        console.log(response, "candi");
      });
      debugger;
      return {
        ...state,
        open
      };
      case actionTypes.HANDLE_ON_TIMER_EXPIRE:
        var { snackbarOpen} = state;
        snackbarOpen=!snackbarOpen
        axios.get("http://localhost:8080/api/candidate_answer").then(response => {
          console.log(response, "candi");
        });
        debugger;
        return {
          ...state,snackbarOpen
        };


    case actionTypes.HANDLE_ON_CLOSE:
      var { open } = state;
      debugger;
      open = !open;
      debugger;
      return {
        ...state,
        open
      };
    case actionTypes.HANDLE_ON_SNACKBAR_CLOSE:
      var { snackBar } = state;
      var { snackbarOpen } = state;
      debugger;
      snackbarOpen = !snackbarOpen;
      debugger;
      return {
        ...state,
        snackbarOpen
      };
    case actionTypes.HANDLE_ON_CLICK_OK:
      var history = action.payload.history;
      debugger;
      history.push("/user/logoutsection");
      return {
        ...state,
        history
      };
    case actionTypes.HANDLE_ON_LOGOUT:
      var history = action.payload.history;
      history.push("/");
      return {
        ...state,
        history
      };

      case actionTypes.SET_STATES_FROM_RESPONSE:
      var {user,exam_rules}=state;
      var {attribute,val}=action.payload;
      console.log(user,exam_rules,"user");
      return{
        ...state,
        [attribute]:val
      }


      debugger;
    default:
      return state;
  }
};
export default reducer;
