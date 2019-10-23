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
const LogoutSection = props => {
  console.log(props);
  const { question, index, handleOnLogout, history, classes } = props;

  console.log("answers", question);
  return (
    <div>
      <AppBar
        position="static"
        classes={{ root: "appbarstyle" }}
        colr="default"
      >
        <Toolbar>
          <Typography variant="h6" className={classes.grow}>
            <Button> </Button>
          </Typography>
          <Typography>
            <Button
              color="inherit"
              onClick={() => {
                handleOnLogout(history);
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
            <Typography variant="h5">Thank You For Taking The Test</Typography>
          </Grid>
          <LottieControl animation={pinjump} height={300} width={300} />
        </Card>
      </Grid>
    </div>
  );
};
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
    }
  };
};
LogoutSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(LogoutSection)));
