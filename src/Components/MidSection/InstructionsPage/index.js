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
import Header from "../../Header";
import { connect } from "react-redux";
import { handleOnChange, onClickStart } from "../../../redux/actions";
import { withRouter } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import {
  Card,
  CardContent,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from "@material-ui/core";

import CardActions from "@material-ui/core/CardActions";

const InstructionsPage = props => {
  console.log(props);
  const { rule, handleOnChange, disabled, history, onClickStart } = props;

  return (

    <Grid  justify content="center">
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
      <br></br>
      <br></br>
      <br></br>
      <Grid container justify="center">
        <Grid item md={6}>
          <h1
            style={{
              textAlign: "center",
              fontFamily: "initial",
              color: "#009688",
              paddingTop: "50px"
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
            {rule.map((r, index) => (
              <ul>
                <li key={index} classes={{ root: "instruction-line" }}>
                  {r.rulename}
                </li>
              </ul>
            ))}
          </Card>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid item md={12} style={{ textAlign: "center" }}>
          <Checkbox
            style={{ color: "#009688" }}
            onChange={e => {
              handleOnChange("disabled", !e.target.checked);
            }}
          />
          Agree and Continue,
        </Grid>
        <Grid item md={1}>
          <Button
            variant="contained"
            color="primary"
            disabled={disabled}
            onClick={() => {
              onClickStart(history);
            }}
          >
            Start
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = ({ disabled, rule }) => {
  return {
    disabled,
    rule
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnChange: (property, value) => {
      dispatch(handleOnChange(property, value));
    },
    onClickStart: history => dispatch(onClickStart(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(InstructionsPage));
