import React from 'react';
import './index.css';
import {AppBar,Toolbar,Typography,Grid,Box,Button,Card} from '@material-ui/core';
import {connect} from 'react-redux';
import {handleOnLogout} from '../../../redux/actions';
import {withRouter} from 'react-router-dom';
import LottieControl from '../../LottieControl';
import pinjump from '../../stories/972-done.json';
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
        <Card   classes={{root:"Box-css1"}} >
      <Grid item md={12} >
      <Typography
        variant="h5">
        Thank You For Taking The Test
      </Typography>
      </Grid>
        <LottieControl animation={pinjump} height={300} width={300} />
      </Card>
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
