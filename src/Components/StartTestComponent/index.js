import React from "react";
import { AppBar, Toolbar, Typography, MenuItem } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { setStatesFromResponse } from "../../redux/actions";
class StartTestComponent extends React.Component {
  handleOnCandidatePostMap = () => {
    let arr = [];
    var { user, post, setStatesFromResponse, history } = this.props;
    axios
      .get("http://localhost:8080/api/candidate_post_maps", {
        params: { user_id: user[0].uuid }
      })
      .then(response => {
        arr = response.data.posts.map(po => po);
        setStatesFromResponse("post", arr);
      });
    history.push("/user/InstructionsPage");
  };
  enterTest = history => {
    history.push("/user/InstructionsPage");
  };
  render() {
    console.log(this.props.user, "user");
    return (
      <div>
        <AppBar style={{ background: "#009688" }}>
          <Toolbar>
            <Typography
              style={{
                fontFamily: '"Apple Color Emoji"',
                flexGrow: "1"
              }}
              variant="h5"
            >
              GoodWorks Colloquio
            </Typography>
            <MenuItem onClick={history => this.handleOnCandidatePostMap()}>
              Start Test
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = ({ user, post }) => {
  return {
    user,
    post
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setStatesFromResponse: (attribute, val) =>
      dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(StartTestComponent));
