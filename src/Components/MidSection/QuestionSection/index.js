import React from "react";
import "./index.css";
import { Card, Button, Grid } from "@material-ui/core";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Dialogbox from "../../Dialogbox";
import Icon from "@material-ui/core/Icon";
import AnswerList from "../AnswerList";
import {
  handleOnOption,
  handleOnOptioncapture,
  handleOnClickSubmit
} from "../../../redux/actions";
import axios from "axios";

class QuestionSection extends React.Component {
  state = {
    answerList: [],
    questionAnswer: {
      questionId: "",
      answer: "",
      q_index: 0
    },
    index: 0,
    open: false,
    disabled1: true,
    disabled4: false,
    disabled6: true
  };
  handle_Change_Answer = e => {
    const { index, user_answer, c_answer, u_ans, questionAnswer } = this.state;
    const { answerList } = this.props;
    const { questions } = this.props;
    var { value } = questions;
    const { q_index } = questionAnswer;
    console.log(index, "current");
    debugger;
    questionAnswer.questionId = questions[this.state.index].q_uuid;
    questionAnswer.answer = e;
    debugger;
    answerList[index] = questionAnswer;
    this.setState({
      ...this.state,
      questionAnswer: {
        q_index: q_index + 1
      },
      value: e
    });
    console.log(answerList, "answers");
    debugger;
  };
  handleOnClickNext = e => {
    let { index, disabled1, disabled4, disabled6 } = this.state;
    let { questions } = this.props;
    console.log(index, "nextIndex");
    if (index < questions.length - 1) {
      if (index === this.props.questions.length - 2) {
        this.setState({
          disabled4: true,
          disabled6: false
        });
      }
      this.setState({
        index: index + 1,
        disabled1: false
      });
    }
  };
  handleOnClickPrevious = () => {
    var { index, disabled4 } = this.state;
    let { questions } = this.props;
    if (index === 1) {
      this.setState({
        disabled1: true
      });
    }
    if (index < questions.length) {
      this.setState({
        disabled6: true
      });
    }

    if (index < questions.length) {
      this.setState({
        disabled4: false
      });
    }

    this.setState({
      index: index - 1
    });
  };
  handleOnClickSubmit = () => {
    debugger;
    var { open } = this.state;
    var {post}=this.props;
    open = true;
    debugger;
    this.setState({
      open
    });
    debugger;
    axios
      .post("http://localhost:8080/api/candidate_answer", {
        answerList: this.state.answerList,
        user_id: post[0].uuid
      })
      .then(response => {
        console.log(response, "candi");
      });

    debugger;
  };
  handleOnClosedialog = () => {
    var { open } = this.state;
    open = false;
    this.setState({
      open
    });
  };
  render() {
    const {
      questions = [],
      handleOnClickSubmit,
      open,
      answerList
    } = this.props;
    console.log(questions, "q");
    const {
      disabled1,
      disabled4,
      disabled6,
      index,
      questionAnswer
    } = this.state;

    let { user_answer, u_ans } = this.state;

    const q_List = questions.length ? (
      questions.map((q, key) => {
        const val =
          this.props.answerList[key] && this.props.answerList[key].answer;
        debugger;
        return (
          <Card key={key + 1} classes={{ root: "questionsectionstyle" }}>
            <ul>
              {key + 1}
              {"."} {questions[key].q_name}
              <RadioGroup
                key={key + 1}
                onChange={e => {
                  this.handle_Change_Answer(e.target.value);
                }}
                value={val}
              >
                {q.options.map((o, key) => (
                  <FormControlLabel
                    value={o}
                    control={<Radio />}
                    label={o}
                    style={{ display: "inline-block" }}
                  />
                ))}
              </RadioGroup>
            </ul>
          </Card>
        );
      })
    ) : (
      <div>no questions</div>
    );

    return (
      <React.Fragment>
        {q_List[this.state.index]}
        <br />
        <Grid container>
          <Grid item md={6}>
            <Button
              classes={{ root: "previousbutton" }}
              variant="contained"
              color="primary"
              onClick={this.handleOnClickPrevious}
              disabled={disabled1}
            >
              Previous
            </Button>
          </Grid>
          <Grid item md={5}>
            <Button
              variant="contained"
              color="primary"
              classes={{ root: "nextbuttonstyle" }}
              onClick={this.handleOnClickNext}
              disabled={disabled4}
            >
              Next
            </Button>
          </Grid>
          <Grid item md={1}>
            <Dialogbox
              text={this.state.text}
              open={this.props.open}
              handleOnClose={this.props.handleOnClose}
            />
            <Button
              color="primary"
              variant="contained"
              classes={{ root: "submitstyle" }}
              disabled={disabled6}
              onClick={this.props.handleOnClickSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ q_lists,post }) => {
  console.log(q_lists, "redux");
  return {
    q_lists,post
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnOption: optionname => {
      dispatch(handleOnOption(optionname));
    },
    handleOnOptioncapture: () => {
      dispatch(handleOnOptioncapture());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QuestionSection));
// const postAnswer = e => {
//   const baseURL = "http://localhost:8080/api/";
//   debugger;
//   axios.get(baseURL + "/" + "user_candidate_answer").then(response => {
//     user_answer = response.data.user_ans.map(user => user.question_id);
//     console.log(user_answer, "user");
//     // console.log(user_answer[index],"answers");
//     console.log(questions, "questions");
//     let question = questions.map(q => q.q_uuid);
//     console.log(question, "question");
//     console.log(question[index], "q_index");
//     debugger;
//     user_answer.forEach(us => {
//       if (question[index] === us) {
//         this.state.flag = true;
//         this.setState({
//           flag: true,
//           u_ans: e
//         });
//         console.log(user_answer, "ans");
//       }
//     });
//     if (this.state.flag) {
//       this.setState({
//         flag: false
//       });
//       return axios
//         .put(baseURL + "/" + "candidate_answer", {
//           question_id: questions[index].q_uuid,
//           c_answer: this.state.u_ans
//         })
//         .then(response => {
//           let res = response;
//           console.log(res, "user_response");
//         });
//       console.log("put method");
//     } else {
//       console.log(u_ans, "user_a");
//       return axios
//         .post(baseURL + "/" + "candidate_answer", {
//           question_id: questions[index].q_uuid,
//           user_id: "GWL1234",
//           c_answer: this.state.u_ans
//         })
//         .then(response => {
//           let res = response;
//           console.log(res, "user_response");
//         });
//     }
//   });
//   debugger;
// };
