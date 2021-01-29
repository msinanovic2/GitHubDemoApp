import React from 'react'
import SearchBar from './Components/SearchBar'
import RepoCard from './Components/RepoCard'
import { Backdrop, CircularProgress, Grid, Typography } from '@material-ui/core';
import {useState,useEffect} from 'react'
import Services from './Services'
import { Pagination } from '@material-ui/lab';


function SearchPage(){
    
    const [repos,setRepos] = useState([])
    const [pageNumber,setPageNumber] = useState(0)
    const [loading,setLoading] = useState(false);
    const [numOfPages,setNumOfPages] = useState(0)
    const [currentPage,setCurrentPage] = useState([])

    //Hook for pagination
    useEffect(()=>{
        if( pageNumber && pageNumber>0)
            setCurrentPage(repos?.items?.slice( (pageNumber-1)*10,pageNumber*10))
    },[pageNumber])

    const changeFormat= (items)=>{
        let newItems = []
        for(let repo of items)
            newItems.push({
                id:repo.id,
                name:repo.name,
                login:repo.owner.login,
                description:repo.description,
                url:repo.html_url,
                avatar:repo.owner.avatar_url,
            })
        return newItems
    }

    const handleResponse = (newRepos) =>{
        if(!newRepos){
            setPageNumber(0)
            setLoading(false)
            setNumOfPages(0)
            setCurrentPage([])
            return
        }
        setNumOfPages(Math.ceil(newRepos?.items.length/10))
        setLoading(false)
        //setPageNumber(0) to force change
        setPageNumber(1)
        setCurrentPage(newRepos.items?.slice( 0,10))
    }
    const editRepo = (id,name,username,description)=>{
        //deep copy
        console.log("started")
        setLoading(true)
        let newRepos = JSON.parse(JSON.stringify(repos))
        for(let i = 0; i<newRepos.items.length;i++)
            if(newRepos.items[i].id === id){
                console.log(id)
                newRepos.items[i].name=name
                newRepos.items[i].owner.login = username
                newRepos.items[i].description = description
            }
        setRepos(newRepos)
        setCurrentPage(newRepos?.items?.slice( (pageNumber-1)*10,pageNumber*10))
        setLoading(false)
        const newItems = changeFormat(newRepos.items)
        Services.saveRepos(newItems)
        
    }

    const GetRepos = async (searchParam)=>{
        setLoading(true)
        const reposResult = await Services.getRepos(searchParam)
        setRepos(reposResult)
        handleResponse(reposResult)
    }
    
    return( 
    <div className={"content"}> 
        <Backdrop open={loading} onClick={()=>setLoading(false)}>
            <CircularProgress color="inherit"  />
        </Backdrop>  
        <Grid  container direction="column" justify={"center"} alignItems={"center"} spacing={5}>
            <Grid item style={{width:"800px"}}> 
                    <SearchBar getReposCall = {GetRepos}/>
            </Grid> 
            {/* response null*/}
            {   repos?
                currentPage?.map(repo => (
                    <Grid item style={{width:"800px"}} key={repo.id}>
                        <RepoCard repo={repo} editRepo={editRepo}/>
                    </Grid>
                )):
                    <Typography color={"error"}>
                        Request failed. Try again.
                    </Typography>
            }
            {/*No repos to display */}
            {repos?.total_count===0? 
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


export default SearchPage