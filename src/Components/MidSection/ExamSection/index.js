import React from "react";
import "./index.css";
import QuestionSection from "../QuestionSection";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Card,
  MenuItem
} from "@material-ui/core";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import SnackBar from "../../SnackBar";
import { handleOnTimerExpire,setStatesFromResponse,handleOnSnackBarClose } from "../../../redux/actions";
class ExamSection extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerStarted: true,
    timerStopped: true,
    text: "time",
    questions: [],
    answerList: [],
    open: false
  };

  componentDidMount() {
    var { post } = this.props;
    axios
      .get("https://pure-wave-01085.herokuapp.com/api/question_sections", {
        params: { post_id: post[0].post_id }
      })
      .then(response => {
        let time = response.data.questions.map(t => t.timer);
        let times = time.reduce((a, b) => a + b, 0);

        console.log(time, "tim");
        this.setQuestions(times, response.data.questions);
      })
      .catch(err => console.log(err));
    this.validateUser();
    this.varifyUser();
  }

  validateUser = () => {
    axios
      .post(`https://evening-dawn-93464.herokuapp.com/api/verify`, {
        auth_token: sessionStorage.getItem("auth_token")
      })
      .then(response => {
        if (!response.data.isloggedIn) {
          this.setState({ redirect: true });
        }
      })
      .catch(error => console.log(error, "error"));
    let msg = "user is not authorised";
    this.props.setStatesFromResponse("message", msg);
    this.props.handleOnSnackBarClose();
  };
  varifyUser = () => {
    axios
      .post(`https://evening-dawn-93464.herokuapp.com/api/validate`, {
        auth_token: sessionStorage.getItem("serverAUTHTOKEN")
      })
      .then(response => {
        let status = response.data.status;
        if (status === 401) {
          this.setState({ redirect: true });
        }
      })
      .catch(error => console.log(error));
  };

  setQuestions = (times, questions) => {
    let { hours = 0, minutes, seconds } = this.state;

    if (times > 60) {
      minutes = Math.floor(times / 60);
      seconds = times % 60;
    }
    if (minutes > 60) {
      hours = minutes / 60;
      minutes %= 60;
    }
    console.log(hours, minutes, seconds, "timer");
    this.setState({
      hours,
      minutes,
      seconds,
      questions
    });
  };

  handleTimerStart() {
    if (this.state.timerStopped) {
      this.timer = setInterval(() => {
        this.setState({
          timerStarted: true,
          timerStopped: false
        });
        if (this.state.timerStarted) {
          if (this.state.seconds <= 0) {
            this.setState(prevState => ({
              minutes: prevState.minutes - 1,
              seconds: 60
            }));
          }
          if (this.state.minutes <= 0 && this.state.hours >= 1) {
            this.setState(prevState => ({
              hours: prevState.hours - 1,
              minutes: 60
            }));
          }
          this.setState(prevState => ({
            seconds: prevState.seconds - 1
          }));
          if (
            this.state.hours <= 0 &&
            this.state.minutes <= 0 &&
            this.state.seconds <= 0
          ) {
            clearInterval(this.timer);
            // alert("sesion expired");
            this.props.handleOnTimerExpire();
            this.handleTimerStop(this);
          }
        }
      }, 1000);
    }
  }
  handleTimerStop() {
    const { history } = this.props;
    this.setState({
      timerStarted: false,
      timerStopped: true
    });
    clearInterval(this.timer);
    return this.handleOnClickOkAns();
    // history.push("/user/logoutsection");
  }
  componentWillMount() {
    this.handleTimerStart(this);
  }
  handleOnClickSubmit = () => {
    debugger;
    var { open } = this.state;

    open = true;
    debugger;
    this.setState({
      open
    });
  };
  handleOnClose = () => {
    var { open } = this.state;
    open = false;
    debugger;
    this.setState({
      ...this.state,
      open
    });
    debugger;
    console.log(open, "open");
  };
  handleOnClickOkAns = history => {
    var { post, user } = this.props;
    debugger;
    axios
      .post("https://pure-wave-01085.herokuapp.com/api/candidate_answer", {
        answerList: this.state.answerList,
        user_id: user[0].uuid
      })
      .then(response => {
        console.log(response, "candi");
      });
    debugger;
    history.push("/user/logoutsection");
  };
  render() {
    const {
      hours,
      minutes,
      seconds,
      capture,
      questions,
      open,
      answerList
    } = this.state;
    const { handleOnClickSubmit, handleOnClose, handleOnClickOkAns } = this;

    return (
      <div justify content="center" style={{ flexGrow: "1" }}>
        <AppBar
          position="static"
          classes={{ root: "examheadingcolor" }}
          color="#009688"
        >
          <Toolbar>
            <Typography
              style={{
                fontFamily: '"Apple Color Emoji"',
                flexGrow: "1"
              }}
              variant="h5"
            >
              ExamSection
            </Typography>
            <Grid>
              <MenuItem style={{ paddingLeft: "28px", paddingTop: "20px" }}>
                <i class="material-icons">timer</i>
              </MenuItem>
              <MenuItem>
                {" "}
                <b>
                  {hours +
                    ":" +
                    ("0" + minutes).slice(-2) +
                    ":" +
                    ("0" + seconds).slice(-2)}{" "}
                </b>{" "}
              </MenuItem>
            </Grid>
          </Toolbar>
        </AppBar>
        <QuestionSection
          questions={questions}
          answerList={this.state.answerList}
          open={this.state.open}
          handleOnClose={handleOnClose}
          handleOnClickSubmit={this.handleOnClickSubmit}
          handleOnClickOkAns={handleOnClickOkAns}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ q_lists, post, user, exam_rules }) => {
  return {
    q_lists,
    post,
    exam_rules,
    user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnTimerExpire: () => {
      dispatch(handleOnTimerExpire());
    },
    handleOnSnackBarClose: () => dispatch(handleOnSnackBarClose()),
    setStatesFromResponse: (attribute, val) =>
      dispatch(setStatesFromResponse(attribute, val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExamSection));
