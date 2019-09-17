import React from 'react';
import './index.css';
import {AppBar,Toolbar,Typography,Grid,Box,Paper,Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {handleOnLogout} from '../../../redux/actions';
import {withRouter} from 'react-router-dom';

const LogoutSection =(props)=>{
  console.log(props);
  const {question,index,handleOnLogout,history}=props;

  console.log("answers",question);
    return(
      <div>
      <AppBar position="static" classes={{root:"appbarstyle"}} colr="default" >
      <Toolbar >
      <Grid item md={5} >
      </Grid>
      <Grid item md={5}>
      </Grid>
      <Grid item md={1}>
      <Button classes={{root:"typo"}}  color="inherit" onClick={()=>{handleOnLogout(history)}}>
      <i class="material-icons">
  power_settings_new
  </i></Button>

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
  const mapStateToProps=({question,index,history})=>{
    return{
      question,index,history
    };
  }
  const mapDispatchToProps=dispatch=>{
    return({
      handleOnLogout:(history)=>{dispatch(handleOnLogout(history))}
    })
  }


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LogoutSection));
// {question.map((q,index)=>{
//  return <Paper>{index+1}.{q.questionname}:{q.correctvalue}, ans:{q.value}</Paper>
// })}
