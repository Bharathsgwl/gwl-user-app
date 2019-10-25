import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Card,
  CardContent,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import SnackBar from "../SnackBar";
import { connect } from "react-redux";
import {
  handleFieldChange,
  onClickLogin,
  handleOnSnackBarClose,
  setStatesFromResponse
} from "../../redux/actions";
import * as actionTypes from "../../redux/actionTypes";
import { withRouter, Redirect } from "react-router-dom";
import axios from "axios";

class Login extends React.Component {
  onClickLogin = () => {
    let arr = [];
    let msg = "";
    debugger;
    var {
      snackBarOpen,
      login,
      message,
      history,
      handleOnSnackBarClose,
      setStatesFromResponse,
      user
    } = this.props;
    console.log(user);
    debugger;
    if (login.username == "" && login.password == "") {
      msg = "Enter Credentials";
      setStatesFromResponse("message", msg);
      handleOnSnackBarClose();
    } else if (login.username.length <= 4) {
      msg = "Credentials too short";
      setStatesFromResponse("message", msg);
      handleOnSnackBarClose();
    } else {
      axios
        .post(`https://evening-dawn-93464.herokuapp.com/api/login`, {
          user_name: login.username,
          password: login.password
        })
        .then(response => {
          console.log(response.data.all, "response list coming");
          if (response.data.all) {
            arr = response.data.all.map(d => d);
            console.log(arr, "array");
            setStatesFromResponse("user", arr);
            //
            // sessionStorage.setItem("token", "true");
            this.setSessionHandler(
              response.data.all[0],
              true,
              response.data.auth_token
            );
            console.log(user, "user");
            return this.handleOnUserCheck();
          } else {
            msg = "invalid-user/password";
            setStatesFromResponse("message", msg);
            handleOnSnackBarClose();
          }

        })
        .catch(err => console.log(err, "err"));
    }

    return this.handleOnInstruction();
  };
  setSessionHandler = (sessionDetails, flag, auth) => {
    var {sessionDetail,redirect}=this.props;
    debugger;
    let details = {};
    sessionStorage.setItem("sessionId", sessionDetails.uuid);
    sessionStorage.setItem("name", sessionDetails.user_name);
    sessionStorage.setItem("auth_token", auth);
    // details = sessionDetails;
    //
    // debugger;
    // console.log(details, "details");
    debugger;
    setStatesFromResponse("sessionDetail", sessionDetails);
    let red_direct = false;
    red_direct = flag;
    setStatesFromResponse("redirect", red_direct);
    // setStatesFromResponse("sessionDetails", sessionFlag);
  };

  handleOnUserCheck = () => {
    var { user, setStatesFromResponse, message, snackbarOpen,redirect,sessionDetails } = this.props;
    console.log(user, "user111");
    console.log(sessionDetails,"session");
    axios
      .post("http://localhost:8080/api/user_checking", {
        user_id: user[0].uuid
      })
      .then(response => {
        console.log(response, "resposne");
        debugger;
        if (response.data.name === "User exist") {
          let msg = "user exist";
          this.props.setStatesFromResponse("message", msg);
          this.props.handleOnSnackBarClose();
          debugger;
        } else {
          return this.handleOnCandidatePostMap();
        }
        debugger;
      });
  };
  handleOnCandidatePostMap = () => {
    let arr = [];
    var { user, post, setStatesFromResponse, history } = this.props;
    console.log(this.props.user, "user is coming");
    axios
      .get("http://localhost:8080/api/candidate_post_maps", {
        params: { user_id: user[0].uuid }
      })
      .then(response => {
        console.log(response.rows, "rows");
        arr = response.data.posts.map(po => po);
        setStatesFromResponse("post", arr);
      });
    history.push("/user/InstructionsPage");
    // let data = sessionStorage.getItem("token");
    // console.log(data, "data");
    debugger;
    // if (data) {
    //   console.log(data, "data");
    //   // return <Redirect to="/user/InstructionsPage" />;
    // }
    // return data ? <Redirect to="/user/InstructionsPage" /> : "";
  };

  handleOnInstruction = () => {
    let arr = [];

    var { setStatesFromResponse, exam_rules } = this.props;
    axios
      .get("http://localhost:8080/api/exam_rules")
      .then(response => {
        console.log(response.data, "abcv");
        arr = response.data.exam_rules;
        setStatesFromResponse("exam_rules", arr);
        console.log(arr, "arra");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    const { history, handleFieldChange, login,redirect,sessionDetail} = this.props;
    const { onClickLogin } = this;
    console.log(this.props,"this.props");
    console.log(onClickLogin, "log");
    debugger;

    return (
      <React.Fragment>
        <Grid container>
          <AppBar position="static" style={{ background: "#009688" }}>
            <Toolbar>
              <Grid item md={12}>
                <Typography
                  style={{ fontFamily: '"Apple Color Emoji"' }}
                  variant="h5"
                >
                  GoodWorks Colloquio
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        ​
        <Grid container style={{ marginTop: 10 }}>
          <Grid
            item
            md={7}
            style={{ background: "#009688", height: "680px", width: "50000px" }}
          ></Grid>
          <Grid item md={5} classes={{ root: "displaying" }}>
            <Card classes={{ root: "card" }}>
              <CardContent>
                <Typography>Login</Typography>
                <Typography color="textSecondary" gutterBottom>
                  <TextField
                    id="outlined-name"
                    label="Name"
                    margin="normal"
                    size="8"
                    variant="outlined"
                    value={login.username}
                    onChange={e => {
                      handleFieldChange("username", e.target.value);
                    }}
                  />
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    size="8"
                    variant="outlined"
                    onChange={e => {
                      handleFieldChange("password", e.target.value);
                    }}
                    value={login.password}
                  />
                </Typography>
                <Typography>
                  {" "}
                  <Button
                    variant="contained"
                    style={{ background: "#009688", color: "white" }}
                    onClick={onClickLogin}
                  >
                    SUBMIT
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <SnackBar />
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { message, snackBarOpen, login, user, exam_rules,redirect,sessionDetail } = state;
  return {
    message,
    snackBarOpen,
    login,
    user,
    exam_rules,redirect,sessionDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleFieldChange: (property1, value1) =>
      dispatch(handleFieldChange(property1, value1)),
    handleOnSnackBarClose: () => dispatch(handleOnSnackBarClose()),
    setStatesFromResponse: (attribute, val) =>
      dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
