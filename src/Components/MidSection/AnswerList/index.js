import React from "react";
import "./index.css";
import { Paper } from "@material-ui/core";
import { connect } from "react-redux";
const AnswerList = props => {
  console.log(props);
  const { questions } = props;

  console.log(questions[0],"ans");
  return <div>hiii</div>;
};
const mapStateToProps = ({ question }) => {
  return {
    question
  };
};

export default connect(
  mapStateToProps,
  null
)(AnswerList);
// {question.map( (r,index) => (
//   <ul><li><Paper key={index}  classes={{root:"instruction-line"}}>{r}</Paper></li></ul>
// ))}
