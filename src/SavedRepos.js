import React from 'react'
import RepoCardSaved from './Components/RepoCardSaved'
import { Backdrop, CircularProgress, Grid, Typography } from '@material-ui/core';
import {useState,useEffect} from 'react'
import Services from './Services'
import { Pagination } from '@material-ui/lab';


function SavedRepos(){
    useEffect(()=>{
        setLoading(true)
        Services.getSaved().then(items=>{
            setRepos(items)
            if(items){
                setNumOfPages(Math.ceil(items.length/10))
                setPageNumber(1)
                setCurrentPage(items?.slice( 0,10))
            }else{
                setNumOfPages(0)
                setPageNumber(0)
                setCurrentPage([])
            }
            setLoading(false)
        })
    },[])
    
    const [repos,setRepos] = useState([])
    const [pageNumber,setPageNumber] = useState(0)
    const [loading,setLoading] = useState(false);
    const [numOfPages,setNumOfPages] = useState(0)
    const [currentPage,setCurrentPage] = useState([])

    //Hook for pagination
    useEffect(()=>{
        if( pageNumber && pageNumber>0)
            setCurrentPage(repos?.slice( (pageNumber-1)*10,pageNumber*10))
    },[pageNumber])

 


    
    return( 
    <div className={"content"}> 
        <Backdrop open={loading} onClick={()=>setLoading(false)}>
            <CircularProgress color="inherit"  />
        </Backdrop>  
        <Grid  container direction="column" justify={"center"} alignItems={"center"} spacing={5}>
            <Grid item style={{width:"800px"}}> 
                    <Typography variant={"h3"}>
                        Saved Repos   
                    </Typography>        
            </Grid> 
            {/* response null*/}
            {   repos?
                currentPage?.map(repo => (
                    <Grid item style={{width:"800px"}} key={repo.id}>
                        <RepoCardSaved repo={repo} />
                    </Grid>
                )):
                    <Typography color={"error"}>
                        Request failed. Try again.
                    </Typography>
            }
            {/*No repos to display */}
            {repos?.length && !loading===0? 
                    <Typography >
                        No results.
                    </Typography>
                :null

            }
            {numOfPages>0?
                <Grid item>
                    <Pagination count={numOfPages}  page={pageNumber} onChange={(event,currentPageNumber)=>{setPageNumber(currentPageNumber)}}/>
                </Grid>:null}
        </Grid>
        
    </div>
    
    );

}


export default SavedRepos