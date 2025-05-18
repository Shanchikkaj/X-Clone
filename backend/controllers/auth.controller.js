export const signup = async(req,res)=>{
    try{
       const {username, fullName, email,password} =req.body;
       
    } catch(error){
        console.log(`Error in singup controller: ${error }`)
        res.status(500).json({error: "Internal Server Error"})
    }
 
}

export const login= (req,res)=>{
    res.send("login controller")
}

export const logout = (req,res)=>{
    res.send("logout controller")
}