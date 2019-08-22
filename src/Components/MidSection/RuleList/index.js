import React from 'react';
import './index.css';
import {Paper} from '@material-ui/core';
const RuleList =({rule1 = []})=> (
  <div>
{rule1.map( (r,index) => (
  <ul><li><Paper key={index}  classes={{root:"instruction-line"}}>{r.rulename}</Paper></li></ul>
))}
</div>
    );

export default RuleList;
