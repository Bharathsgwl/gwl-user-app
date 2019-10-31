import React from "react";
import "./index.css";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  Button,
  Card
} from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { handleOnLogout } from "../../../redux/actions";
import { withRouter } from "react-router-dom";
import LottieControl from "../../LottieControl";
import pinjump from "../../stories/972-done.json";
import axios from "axios";
import Feedback from "../../Feedback";
import { setStatesFromResponse,handleOnSnackBarClose } from "../../../redux/actions";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
class LogoutSection extends React.Component {
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
  render() {
    const { question, index, handleOnLogout, history, classes } = this.props;

    const onClickLogout = () => {
      debugger;
      axios
        .put(`https://evening-dawn-93464.herokuapp.com/api/logout`, {
          auth_token: sessionStorage.getItem("auth_token")
        })

        .then(response => {
          sessionStorage.clear();

          if (!response.data.isloggedIn) {
            history.push("/");
          }
        })

        .catch(error => console.log(error));
      debugger;
      debugger;
    };
    console.log("answers", question);
    return (
      <div>
        <AppBar
          position="static"
          classes={{ root: "appbarstyle" }}
          color="default"
        >
          <Toolbar>
            <Typography variant="h6" className={classes.grow}>
              <Button> </Button>
            </Typography>
            <Typography>
              <Button
                color="inherit"
                onClick={() => {
                  onClickLogout();
                }}
              >
                <i class="material-icons">power_settings_new</i>
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="center"
          classes={{ root: "logoutpage-container" }}
        >
          <Card classes={{ root: "Box-css1" }}>
            <Grid item md={12}>
              <Typography variant="h5">
                Thank You For Taking The Test
              </Typography>
              <Feedback />
            </Grid>
            <LottieControl animation={pinjump} height={300} width={300} />
          </Card>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ question, index, history }) => {
  return {
    question,
    index,
    history
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnLogout: history => {
      dispatch(handleOnLogout(history));
    },
    handleOnSnackBarClose: () => dispatch(handleOnSnackBarClose()),
    setStatesFromResponse: (attribute, val) =>
      dispatch(setStatesFromResponse(attribute, val))
  };
};
LogoutSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(LogoutSection)));
