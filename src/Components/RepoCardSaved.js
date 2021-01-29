import React from 'react'
import { Avatar, Card, CardContent, CardHeader,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';





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



function RepoCardSaved(props){
    const classes = useStyle()
    const repo = props.repo;
    const avatarUrl  = repo.avatar;
    const description = repo.description;
    const htmlUrl = repo.url
    const name = repo.name;
    const ownerName = repo.login;
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
              
            </Card>
        
        </div>
    )
}

export default RepoCardSaved