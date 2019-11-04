import * as actionTypes from "../actionTypes";
const applicationIntialState = {
  disabled: true,
  disabled2: false,
  disabled3: true,
  open: false,
    snackbarOpen: false,
    questionList:[],
  rule: [
    {
      rulename:
        "This test contains only Aptitude Section,This test contains following sections are Quantitative and Logical Reasoning."
    },
    {
      rulename:
        "Quantitative Aptitude  section consists of maths questions from the topics like algebra, time & work, time, speed & distance, arithmetic."
    },
    {
      rulename:
        "Logical Reasoning Aptitude section consists of reasoning based questions from common topics of reasoning skills."
    },
    {
      rulename:
        "If You tried to open another window the session will expire automaticaly and it will considerd as a mall practice."
    }
  ],
  index: 0,
  capture: [],
  questions:[],
  question: [
    {
      questionname:"A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 mtres", "180 metres", "324 metres", "150 metres "],
      correctvalue: "150 meters",
      value: ""
    },
    {
      questionname:
        "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
      options: ["200 m", "225 m", "245 m", "250 m"],
      correctvalue: "245 mm",
      value: ""
    },
    {
      questionname:
        "	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
      options: ["1:3", "3:2", "3:4", "None of these"],
      correctvalue: "3:2",
      value: ""
    },
    {
      questionname:
        "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      options: ["45 km/hr", "50 km/hr ", "54 km/hr ", "55 km/hr  "],
      correctvalue: "50 km/h",
      value: ""
    },
    {
      questionname:
        "A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
      options: ["650", "690 ", "698 ", "700  "],
      correctvalue: "698",
      value: ""
    },
    {
      questionname:
        "Mr. Thomas invested an amount of Rs. 13,900 divided in two different schemes A and B at the simple interest rate of 14% p.a. and 11% p.a. respectively. If the total amount of simple interest earned in 2 years be Rs. 3508, what was the amount invested in Scheme B?",
      options: ["6400", "6500 ", "7200 ", "7500  "],
      correctvalue: "6400",
      value: ""
    }
  ],
  length: 2,
  message: "",
  login: {
    username: "",
    password: ""
  },
  fullWidth: false,
    maxWidth: 'xl',
    isStopped: false, isPaused: false,height:0,width:0
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
    case actionTypes.ON_CLICK_LOGIN:
      var history = action.payload.history;
      var {snackbarOpen} = state;
      const { username, password } = state.login;
      var message = state.message;
snackbarOpen = !snackbarOpen;
      debugger;
      username === "GWL" && password === "123"
        ? history.push("/user/InstructionsPage")
        : username == "" && password == ""
        ? (message = "Enter Credentials")
        : (message = "Invalid Credentials");

      debugger;
      return {
        ...state,
        message,
        open,
        username,
        password,
        snackbarOpen
      };

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
      // var history = action.payload.history;
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
      debugger;
      open = !open;
      debugger;
      return {
        ...state,
        open
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
    var snackbarOpen=state;
      var history = action.payload.history;
      history.push("/");
      snackbarOpen=false;
;
      return {
        ...state,snackbarOpen,
        history,
        login:{
          username:"",password:"",snackbarOpen:false
        }
      };
      case 'FETCH_CONTACTS_FULFILLED': {
        var questionList=state;
     return {
       ...state,
       questionList: action.payload.data.data,
       loading: false,
       errors: {}
     }
   }


      debugger;
    default:
      return state;
  }
};
export default reducer;
