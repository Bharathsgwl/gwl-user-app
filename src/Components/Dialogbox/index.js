import React from "react";
import "./index.css";
import {
  Card,
  CardContent,
  Toolbar,
  Typography,
  AppBar,
  IconButton
} from "@material-ui/core";
import { connect } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { handleOnClose, handleOnClickOk } from "../../redux/actions";
import alert from "../stories/6656-warning-sign";
import LottieControl from "../LottieControl";
const Dialogbox = props => {
  console.log(props);
  const {
    open,
    handleOnClose,
    history,
    handleOnClickOk,
    maxWidth,
    fullWidth
  } = props;
  return (
    <Dialog
      open={open}
      aria-labelledby="confirmation-dialog-title"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogTitle id="confirmation-dialog-title">
        <span style={{ fontFamily: '"Apple Color Emoji"' }}>
          Are you sure to end Session
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <LottieControl animation={alert} height={50} width={50} />
        </DialogContentText>
      </DialogContent>
      <DialogActions classes={{ root: "dialogActionstyle" }}>
        <Button
          color="primary"
          onClick={handleOnClose}
          style={{ fontFamily: '"Apple Color Emoji"', marginRight: "20px" }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          style={{ fontFamily: '"Apple Color Emoji"', marginLeft: "120px" }}
          onClick={() => {
            handleOnClickOk(history);
          }}
        >
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = ({ open, fullWidth, maxWidth }) => {
  return {
    open,
    fullWidth,
    maxWidth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOnClose: () => dispatch(handleOnClose()),
    handleOnClickOk: history => dispatch(handleOnClickOk(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dialogbox));
