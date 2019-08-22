import React from 'react';
import './index.css';
import InstructionsPage from '../InstructionsPage';
class MidSection extends React.Component{
  state = {
          disabled:true,
          rule:[{
            rulename: "This test contains only Aptitude Section,This test contains following sections are Quantitative and Logical Reasoning."
          },
            {
              rulename :"Quantitative Aptitude  section consists of maths questions from the topics like algebra, time & work, time, speed & distance, arithmetic."
            },
            {
              rulename:"Logical Reasoning Aptitude section consists of reasoning based questions from common topics of reasoning skills."
            },
            {
              rulename:"If You tried to open another window the session will expire automaticaly and it will considerd as a mall practice."
            }
        ]
  }
  handleOnChange= (e)=>{
    this.setState({disabled: !e.target.checked});
    console.log("checked")
}
  render(){
    console.log(this.state)
    const{rule,disabled}=this.state
    const {handleOnChange}=this
    return(
      <InstructionsPage rules={this.state.rule}  />
      <InstructionsPage handleOnChange={this.handleOnChange} />
      <InstructionsPage disabled={disabled} />

    );
  }
}
export default MidSection;
