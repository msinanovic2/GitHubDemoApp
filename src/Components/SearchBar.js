import { Button, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles((theme)=>({
    searchTextfield :{
        width : "80%",
        marginTop : "4px",
    }
}))


function SearchBar(props){
  
    const classes = useStyle()
    const getReposCall = props.getReposCall
    const [inputHandler,setInputHandler] = useState("")
    return ( 
    <div>    
        <TextField value={inputHandler} placeholder={"Search repository"} className={classes.searchTextfield}  onChange ={(event)=>{
            setInputHandler( event.target.value)
        }}/>
        <Button color = "primary" variant="contained"  onClick={()=>getReposCall(inputHandler)}>
                <SearchIcon/>
        </Button>
    </div>)
}



export default SearchBar