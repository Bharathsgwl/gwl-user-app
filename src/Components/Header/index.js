import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Instructionspage from "../MidSection/InstructionsPage";

class Header extends React.Component {
  render() {
    return (
      <Grid container>
        <AppBar
          position="static"
          classes={{ root: "appbarstyle" }}
          colr="default"
        >
          <Toolbar>
            <Grid item md={5}>
              <Typography
                classes={{ root: "MuiAppBar" }}
                variant="h6"
                color="#607D8B"
              >
                GoodWorkLabs Colloquio
              </Typography>
            </Grid>

            <Grid item md={5}>
              <Button classes={{ root: "typo" }} color="inherit">
                <NavLink to="/user/InstructionsPage">Candidate Portal </NavLink>
              </Button>
            </Grid>

            <Grid item md={1}>
              <Button classes={{ root: "typo" }} color="inherit">
                <i class="material-icons">power_settings_new</i>
              </Button>
            </Grid>

            <Button>
              <i class="material-icons">account_circle</i>
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}
export default Header;
