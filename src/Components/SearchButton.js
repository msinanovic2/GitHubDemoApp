import { Button,} from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';


function SearchButton(){
    const style = {
        //marginTop :"10%",
        marginBottom :"5%",
        height:"80%"

    }



    return (<Button color = "primary" variant="contained"  style={style} >
                <SearchIcon/>
            </Button>)
            
}

export default SearchButton