import { Avatar, Card, CardContent, CardHeader, Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { AuthService } from '../AuthService'
import Services from '../Services'


const useStyles = makeStyles((theme) => ({
    cardAccount:{
        width:"600px",
        margin:"auto"
    },
    link:{
        textDecoration: "none",
        color: theme.palette.text.primary
    }

}))



function CardRow(props) {
    const label = props.label
    const value = props.value
    return <div>
                <Typography >
                    {`${label}: ${value}`}    
                </Typography>        
            </div>
    
}



function MyAccount(props) {
    const classes = useStyles()
    const history = useHistory()

    useEffect(()=>{
            Services.getCurrentUserData().then(data=>{
                console.log(data)
                if(data)
                    setUser(data)
                else{
                    props.setLoggedin(false)
                    AuthService.logout()
                    history.push()
                }
            })
    },[])
    const [user,setUser] = useState({
        avatar_url:"",
        login:"",
        collaborators:"",
        followers:"",
        following:"",
        public_repos:"",
        owned_private_repos:"",
        html_url:"",
        


    })



    return <div className={"content"}>
            <Grid container direction={"column"} justify={"center"} alignItems={"center"} spacing = {4}>    
                <Grid item>
                    <Typography variant={"h5"}>
                        My Account
                    </Typography>
                </Grid>
                <Grid item>
                    <Card className={classes.cardAccount}>
                        <CardHeader 
                        avatar={<Avatar src={user.avatar_url}  alt={"s"}/>}
                        title ={user.login}
                        />
                        <CardContent>
                            <div>
                                Link :
                                <a className={classes.link} href = {user.html_url}>
                                    {user.html_url}
                                </a>
                            </div>
                            <Divider/>
                            <CardRow label={'Collaborators'} value={user.collaborators}/>
                            <Divider/>
                            <CardRow label={'Followers'} value={user.followers}/>
                            <Divider/>
                            <CardRow label={'Following'} value={user.following}/>
                            <Divider/>
                            <CardRow label={'PubliC Repos'} value={user.public_repos}/>
                            <Divider/>
                            <CardRow label={'Owned Private Repos'} value={user.owned_private_repos}/>
                            <Divider/>
                                                 
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
    </div>
}

export default MyAccount