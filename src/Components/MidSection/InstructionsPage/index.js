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
import axios from "axios";
import CardActions from "@material-ui/core/CardActions";

class  InstructionsPage extends React.Component{
  state={
    examRule:[]
  }

  componentDidMount(){
    axios.get("http://localhost:8080/api/exam_rules").then(response=>{
      console.log(response.data,"abcv");
      this.setRules(response.data.exam_rules);
    }).catch(err=>{console.log(err)})
  }
  setRules= examRule=>{
    this.setState({examRule})
  }
//   componentDidMount() {
//   const { setTasks } = this;
//   axios.get("http://localhost:8080/api/exam_rules")
//     .then(response => {
//       console.log(response,"res");
//       setTasks(response.data.posts);
//     })
//     .catch(err => console.log(err));
// }

// setTasks = taskList => {
//   this.setState({ taskList });
//   console.log(taskList,"tasks");
// };

  render(){
    const {examRule} = this.state;
  console.log(this.props,"instructions");
  const { rule, handleOnChange, disabled, history, onClickStart } = this.props;
  console.log(this.state.taskList[0],"rur=le");
console.log(this.state.taskList.map(task=> task.rule_name),"dhd");
console.log(rule[0],"rule");
  return (
    <Grid justify content="center">
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
            
          {
           examRule.map((rule, index)=>{
             return(
               <ul key={index}>
                 {(rule.priority==="high" || rule.priority==="High" )?<li><b>{rule.rule_name}</b></li>:<li>{rule.rule_name}</li>}
               </ul>
             )
           })
         } 
            
            {/* {this.state.taskList.map((r, index) => (
              <ul>
                <li key={index} classes={{ root: "instruction-line" }}>
                  {r.rule_name}
                </li>
              </ul>
            ))} */}
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
}
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
