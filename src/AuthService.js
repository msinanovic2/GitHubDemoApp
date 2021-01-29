
export const AuthService ={
    logout:()=>{
        localStorage.removeItem("creds");
    },
    storeCreds:(creds)=>{
        localStorage.setItem("creds",creds)
    },
   getCreds:()=>{
        return localStorage.getItem("creds");
    },
    isLoggedIn:()=>{
        return  !!AuthService.getCreds()
    }
}

