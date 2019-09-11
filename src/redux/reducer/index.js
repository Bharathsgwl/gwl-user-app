import * as actionTypes from '../actionTypes';
const applicationIntialState = {
  disabled: true,
  disabled2: true,
  disabled3: true,
  rule: [{
      rulename: "This test contains only Aptitude Section,This test contains following sections are Quantitative and Logical Reasoning."
    },
    {
      rulename: "Quantitative Aptitude  section consists of maths questions from the topics like algebra, time & work, time, speed & distance, arithmetic."
    },
    {
      rulename: "Logical Reasoning Aptitude section consists of reasoning based questions from common topics of reasoning skills."
    },
    {
      rulename: "If You tried to open another window the session will expire automaticaly and it will considerd as a mall practice."
    }
  ],
  index: 0,
  capture: [],
  question: [{
    questionname: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
    options: ["120 mtres", "180 metres", "324 metres", "150 metres "],
    correctvalue: '150 meters',
    value: ''
  }, {
    questionname: "The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30 seconds, is:",
    options: ["200 m", "225 m", "245 m", "250 m"],
    correctvalue: "245 mm",
    value: ''
  }, {
    questionname: "	Two trains running in opposite directions cross a man standing on the platform in 27 seconds and 17 seconds respectively and they cross each other in 23 seconds. The ratio of their speeds is:",
    options: ["1:3", "3:2", "3:4", "None of these"],
    correctvalue: "3:2",
    value: ''
  }, {
    questionname: "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
    options: ["45 km/hr", "50 km/hr ", "54 km/hr ", "55 km/hr  "],
    correctvalue: "50 km/hr",
    value: ''
  }],
  length: 2
}

const reducer = (state = applicationIntialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_ON_CHANGE:
      var {
        property, value
      } = action.payload;
      var {
        disabled
      } = state.disabled;
      return {
        ...state,
        [property]: value
      };

    case actionTypes.ON_CLICK_START:
      var {
        disabled
      } = state.disabled;
      var history = action.payload.history;
      history.push('/user/ExamSection');
      disabled = !disabled;
      return {
        ...state, history, disabled
      };
    case actionTypes.HANDLE_CHANGE_OPTION:
      debugger
      var {
        e
      } = action.payload;
      var index = state.index;
      var {
        capture
      } = state.capture;
      debugger
      var {
        question
      } = state;
      question[index].value = e;
      capture = question[index].value

      debugger
      return {
        ...state,
        question,
        capture
      };
    case actionTypes.HANDLE_ON_CLICK_NEXT:
      var {
        question, index, disabled, disabled2, disabled3, length, capture
      } = state;
      var value = state.question.value;
      var history = action.payload.history;
      index = index + 1;
      debugger
      for (var i = 1; i < question.length; i++) {
        if (index === i) {
          disabled = false;
        }
        if (index === question.length - 1) {
          disabled2 = false;
          disabled3 = false;
        }

      }
      debugger
      return {
        ...state,
        index,
        disabled,
        disabled2,
        disabled3,
        capture: [
          ...capture
        ]
      };
    case actionTypes.HANDLE_ON_CLICK_PREVIOUS:
      var {
        question, index, disabled, length, capture
      } = state;
      debugger
      var value = state.question.value;
      debugger
      debugger
      index = index - 1;
      return {
        ...state, index, disabled
      }
      case actionTypes.HANDLE_ON_OPTION_CAPTURE:
        var {
          value
        } = state.question;
        debugger
        var {
          capture
        } = state;
        debugger
        return {
          capture: [
            ...state.capture,
            value
          ]
        };
      case actionTypes.HANDLE_ON_CLICK_SUBMIT:
        var history = action.payload.history;
        alert(
        "are you sure!!!",
            history.push("/user/logoutsection")
        );

        return {
          ...state, history
        };

      default:
        return state
  }
}
export default reducer;
