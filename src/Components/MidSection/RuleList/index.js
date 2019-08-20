import React from 'react';
import './index.css';
import {Paper} from '@material-ui/core';
const RuleList =({rule1 = []})=> (
  <div>
{rule1.map( (r,key) => (
  <ul><li><Paper key={key}  classes={{root:"instruction-line"}}>{r.rulename}</Paper></li></ul>
))}
</div>
    );

export default RuleList;
