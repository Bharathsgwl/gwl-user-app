import React from "react";
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
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import { handleOnClose, handleOnClickOk } from "../../redux/actions";

const Dialogbox = props => {
  console.log(props);
  const { open, handleOnClose, history, handleOnClickOk } = props;
  return (
    <Dialog
      open={open}
      aria-labelledby="confirmation-dialog-title"
      maxWidth="xs"
      disableBackdropClick
      disableEscapeKeyDown
    >
      <DialogTitle id="confirmation-dialog-title">confirmation</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleOnClose}>
          Cancel
        </Button>
        <Button
          color="primary"
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
const mapStateToProps = ({ open }) => {
  return {
    open
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
