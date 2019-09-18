import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import './index.css';
import {
  Card,
  CardContent,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from "@material-ui/core";
import { connect } from "react-redux";
import { handleOnSnackBarClose } from "../../redux/actions";
import CloseIcon from "@material-ui/icons/Close";

const SnackBar = props => {
  console.log(props);
  const { message, handleOnSnackBarClose,snackbarOpen } = props;
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right-center"
      }}
      open={snackbarOpen}
      autoHideDuration={30000}
      onClose={handleOnSnackBarClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message=<span id="message-id">{message}</span>
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleOnSnackBarClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

const mapStateToProps = ({ message, snackbarOpen }) => {
  return {
    message,
    snackbarOpen
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnSnackBarClose: () => dispatch(handleOnSnackBarClose())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar);
