import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Services from '../Services'
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formField:{
    '& input:invalid + fieldset': {
      borderColor: " red !important",
      borderWidth: "2",
    }     
}
}));


function LoginForm(props) {

  const classes = useStyles();
  const [username,setUsername]  = useState("")
  const [apiKey,setApiKey] = useState("")  
  const [loginFailed,setLoginFailed] = useState(false)
  const history = useHistory()
  useEffect(()=>{

  },[])
  const handleLogin = async ()=>{
      let loggedIn = await Services.loginGithub(username,apiKey);
      if(loggedIn){
          props.setLoggedIn(true)
          history.push('/myaccount')
      }else{
          setLoginFailed(true)
      }
  }

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} >
          <TextField value={username} onChange={(event)=>setUsername(event.target.value)} className={classes.formField} variant="outlined" margin="normal" required fullWidth label="Username" autoFocus/>
          <TextField value={apiKey} onChange={(event)=>setApiKey(event.target.value)} className={classes.formField} variant="outlined" margin="normal" required fullWidth label="API Key" type="password"/>
          <Button disabled={apiKey==="" || username===''}  fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleLogin} >
            Sign In
          </Button>
         {loginFailed? <Typography color={"error"}>
                Error
          </Typography>:null}
        </div>
      </div>
    </Container>
  );
}

export default LoginForm