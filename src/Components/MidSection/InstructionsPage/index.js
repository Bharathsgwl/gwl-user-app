import React from "react";
import "./index.css";
import { Button, Grid, Checkbox, Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import ExamSection from "../ExamSection";

import { connect } from "react-redux";
import {
  handleOnChange,
  onClickStart,
  setStatesFromResponse,handleOnSnackBarClose
} from "../../../redux/actions";
import { withRouter, Redirect } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";

import {
  Card,
  CardContent,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from "@material-ui/core";

import axios from "axios";
import CardActions from "@material-ui/core/CardActions";

class InstructionsPage extends React.Component {
  state = {
    examRule: [],
    redirect: false
  };
  componentDidMount() {
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
  handleOnCLickStart = () => {
    var { history } = this.props;
    this.validateUser();
    this.varifyUser();
    this.props.onClickStart(history);
  };

  render() {
    const { examRule } = this.state;
    console.log(this.props, "instructions");
    const {
      rule,
      handleOnChange,
      disabled,
      history,
      onClickStart,
      fetchPosts,
      data,
      user,
      exam_rules = [],
      handleOnCLickStart
    } = this.props;

    var { rules } = this.props;

    rules = examRule;

    return (
      <Grid justify content="center">
        {this.state.redirect ? <Redirect to="/user/InstructionsPage" /> : null}
        <Grid item md={12}>
          <AppBar position="static" style={{ background: "#009688" }}>
            <Toolbar>
              <Typography
                style={{ fontFamily: '"Apple Color Emoji"' }}
                variant="h5"
              >
                GoodWorks Colloquio
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item md={6} style={{ margin: "auto" }}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "initial",
              color: "#009688",
              paddingTop: "50px",
              margin: "auto"
            }}
          >
            Instructions
          </h1>
          <b>
            <p style={{ textAlign: "center", fontFamily: "initial" }}>
              Read the instructions carefully before entering to the Exam
              Section:
            </p>
          </b>
        </Grid>
        <Grid item sm={12}>
          <Card style={{ width: "70%", margin: "auto", height: "100%" }}>
            {this.props.exam_rules.map((rule, index) => {
              return (
                <ul key={index}>
                  {rule.priority === "high" || rule.priority === "High" ? (
                    <li>
                      <b>{rule.rule_name}</b>
                    </li>
                  ) : (
                    <li>{rule.rule_name}</li>
                  )}
                </ul>
              );
            })}
          </Card>
        </Grid>

        <Grid item md={12} style={{ textAlign: "center" }}>
          <Checkbox
            style={{ color: "#009688" }}
            onChange={e => {
              handleOnChange("disabled", !e.target.checked);
            }}
          />
          Agree and Continue,
        </Grid>
        <Grid item md={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={() => {
              this.handleOnCLickStart();
            }}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = ({
  disabled,
  user,
  post,
  exam_rules,
  sessionDetaill,
  redirectt
}) => {
  return {
    disabled,
    user,
    post,
    exam_rules,
    sessionDetaill,
    redirectt
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: (property, value) => {
      dispatch(handleOnChange(property, value));
    },
    onClickStart: history => dispatch(onClickStart(history)),
    setStatesFromResponse: (attribute, val) => {
      dispatch(setStatesFromResponse(attribute, val));
    },
    handleOnSnackBarClose: () => dispatch(handleOnSnackBarClose())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InstructionsPage));
