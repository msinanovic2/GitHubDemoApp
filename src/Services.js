import Header from "./Header"

import {AuthService} from './AuthService'

const baseUrl ="https://api.github.com"
 


const Services = {
    
    getBaseUrl: ()=> {return baseUrl},
    getRepos: async (name) =>{
        const query = 'q=' + encodeURIComponent(name + 'in:readme in:name') + '&per_page=100'
        let data = null
        try{
            data = await fetch(baseUrl+"/search/repositories?" + query);
            if (!data.ok){
                throw Error("Request failed")
            }
            data = await data.json()
            console.log(data)
            return data
        }
        catch(err){
            console.log(err)
            return null
        }
    },
    getAvatar: async(avatarUrl)=>{
        let data = await fetch(avatarUrl)
        data = await data.json()
        return data
    },

    loginGithub: async (username,apiKey)=>{
        const creds = btoa(username+':'+apiKey);
        AuthService.storeCreds(creds)
        try{
            let testData = await Services.getCurrentUserData()
            if(testData)
                return true
            return false
        }catch(err){
            console.log(err)
            return false
        }
    },
    getCurrentUserData: async ()=>{
        const creds = AuthService.getCreds()
        try{
            let myHeaders = new Headers()
            myHeaders.append("Authorization", `Basic ${creds}`);
            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            let data = await fetch("https://api.github.com/user", requestOptions)
            console.log("data",data)
            if(!data.ok)
                throw Error("Auth failed")
            data = await data.json()
            console.log(data)
            return data
        }catch(err){
            console.log(err)
            AuthService.logout()
            return null
        }
    }


}

export default Services