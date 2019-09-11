import React from 'react';
import './index.css';
import {AppBar,Toolbar,Typography,Grid,Box,Paper} from '@material-ui/core';
import {connect} from 'react-redux';
const LogoutSection =(props)=>{
  console.log(props);
  const {question,index}=props;

  console.log("answers",question);
    return(
      <div>
      <AppBar position="static" classes={{root:"appbarstyle"}} colr="default" >
      <Toolbar>
      <Grid item md={12} style={{direction: "rtl"}}>
      <Typography >
      Logout
      </Typography>
      </Grid>
      </Toolbar>
      </AppBar>
      <Grid container justify="center" classes={{root:"logoutpage-container"}}>
        <Box boxShadow={0}  display="block" classes={{root:"Box-css1"}} bgcolor="background.paper"  color="text.secondary">
      <Grid item md={12} classes={{root:""}}>
      <h3>Thank you for attending interview </h3>

      </Grid>
      </Box>
      </Grid>
</div>

    );
  }
  const mapStateToProps=({question,index})=>{
    return{
      question,index
    };
  }


export default connect(mapStateToProps,null) (LogoutSection);
// {question.map((q,index)=>{
//  return <Paper>{index+1}.{q.questionname}:{q.correctvalue}, ans:{q.value}</Paper>
// })}
