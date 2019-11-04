import React from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
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
import { handleFieldChange, onClickLogin } from "../../redux/actions";
import * as actionTypes from "../../redux/actionTypes";
import { withRouter } from "react-router-dom";
const Login = props => {
  console.log(props);
  const { handleFieldChange, onClickLogin, login, history } = props;
  return (
    <React.Fragment>
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
      <Grid container style={{ marginTop: 10 }}>
        <Hidden xsDown>
          <Grid
            item
            md={7}
            style={{ background: "#009688", height: "578px", width: "50000px" }}
          ></Grid>
        </Hidden>
        <Grid item md={5} classes={{ root: "displaying"}}>
          <Card classes={{ root: "card" }}>
            <CardContent>
              <Typography>Login</Typography>
              <Typography color="textSecondary" gutterBottom>
                <TextField
                  id="outlined-name"
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  value={login.username}
                  onChange={e => handleFieldChange("username", e.target.value)}
                />
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  onChange={e => handleFieldChange("password", e.target.value)}
                  value={login.password}
                />
              </Typography>
              <Typography>
                {" "}
                <Button
                  variant="contained"
                  style={{ background: "#009688", color: "white" }}
                  onClick={() => {
                    onClickLogin(history);
                  }}
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
};
const mapStateToProps = ({ login }) => {
  return {
    login
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClickLogin: history => dispatch(onClickLogin(history)),
    handleFieldChange: (property1, value1, propertyObject) => {
      debugger;
      dispatch(handleFieldChange(property1, value1, propertyObject));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
