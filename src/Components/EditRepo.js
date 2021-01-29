import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'





const useStyle = makeStyles( (theme)=>( {
    root:{
        width:"600px",
        margin: "auto",
        marginTop:"20vh",
        paddingTop:"5vh",
        paddingBottom:"5vh",
       // background:theme.palette.primary.main,
        
    },
    formField:{
          '& input:invalid + fieldset': {
            borderColor: " red !important",
            borderWidth: "2",
          }     
    },
    buttonsDiv:{
        display:"flex",
        justifyContent:"space-between",
        width:"33%"
    }

      
}))


function EditRepo(props) {
    const classes = useStyle()
    const repo = props.repo
    const [username,setUsername] = useState(repo.owner.login)
    const [name,setName] = useState(repo.name)
    const [description,setDescriiption] = useState(repo.description)
    const onSubmit = (event)=>{
        props.editRepo(repo.id,name,username,description)
        props.close()
    }
    return (
        <Paper className={classes.root}>
            <div >
                <Grid container direction={"column"} justify={"center"} alignItems={"center"} spacing={7}>
                    <Typography variant={"h5"}>
                        Edit repository
                    </Typography>
                    <Grid item>
                        <TextField className={classes.formField} value={name} required label={"Name"}  onChange={(event)=>setName(event.target.value)} variant={"outlined"} />
                    </Grid> 
                    <Grid item>
                        <TextField className={classes.formField} value ={username} required label={"Username"} onChange={(event)=>setUsername(event.target.value)}  variant={"outlined"}/>
                    </Grid>
                    <Grid item>
                        <TextField  value = {description} label={"Description"} onChange={(event)=>setDescriiption(event.target.value)} multiline variant={"outlined"} />
                    </Grid>
                    <div className ={classes.buttonsDiv}>
                        <Button  variant={"contained"} color={"primary"} disabled={name === "" || username === ""} onClick = {onSubmit} > 
                            Submit
                        </Button>
                        <Button onClick={props.close} variant={"outlined"} > 
                            Close
                        </Button>
                    </div>
                </Grid>
            </div>
         </Paper>
    )
}

export default EditRepo