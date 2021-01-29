import React, { useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader,IconButton,Modal,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';
import EditRepo from './EditRepo';




const useStyle = makeStyles((theme)=>({
    repoCard :{
        width : "80%",
        margin : "auto",
    },
    titleLink:{
        textDecoration: "none",
        color: theme.palette.text.primary
    }
}))



function RepoCard(props){
    const classes = useStyle()
    const repo = props.repo;
    const avatarUrl  = repo.owner.avatar_url;
    const description = repo.description;
    const htmlUrl = repo.html_url
    const name = repo.name;
    const ownerName = repo.owner.login;
    const [editing,setEditing]= useState(false)
    const close = ()=>{
        setEditing(false)
    }

    

    return(
        <div>
            <Card className={classes.RepoCard}>
                <CardHeader 
                    avatar = {<Avatar src={avatarUrl}   alt={"s"}/>}
                    title = {<a href ={htmlUrl} className={classes.titleLink}>{name}</a>}
                    subheader = {`User: ${ownerName}`}
                />
                <CardContent>
                    <Typography color="textSecondary" >
                    Description:
                        <br/>
                    </Typography>
                    <Typography>
                        {description? description:"Description not available"}
                    </Typography>
                </CardContent>
                <CardActions>
             
                    <IconButton onClick ={(event)=>setEditing(true)}>
                        <Edit/>
                    </IconButton>
                
                </CardActions>
            </Card>
            <Modal open ={editing} >
                <EditRepo editRepo={props.editRepo} close={close} repo={repo}/>
            </Modal>
        </div>
    )
}

export default RepoCard