import User from "../models/user.model.js";

export const getProfile =async(req, res) =>{
    try{
       const {username} = req.params;
       const user = await User.findOne({username})

        if(!user){
          return res.status(400).json({error : "User not found"})  
        }
        res.status(200).json(user);
    }catch(error){
        console.log(`Error in get User profile controller : ${error}`)
        res.status(500).json({error: "Internal server error"})
    }
}

export const followUnfollowUser = async(req, res) =>{
    try{
        const {id} =req.params;
        const userToModify = await User.findById({_id : id})
        const currentUser = await User.findById({_id : req.user._id})

        if(id === req.user._id){
            return res.status(400).json({error: "You can't unfollow/follow yourself"})
        }

        if(!userToModify || !currentUser){
            return res.status(400).json({error : "user not found"})
        }

        const isfollowing = currentUser.following.includes(id);

        if(isfollowing){
            //unfollow
            await User.findByIdAndUpdate({_id: id}, {$pull: {followers: req.user._id}})
            await User.findByIdAndUpdate({_id: res.user._id},{$pull: {following: id}})
            res.status(200).json({message: "Unfollow Successfully"})
        }
        else{
            //follow
            await User.findByIdAndUpdate({_id:id},{$push:{followers: req.user._id}} )
            await User.findByIdAndUpdate({_id: req.user._id}, {$push: {following :id}})
            //send notification
            res.status(200).json({message: "follow Successfully"})
        }

    } catch(error){
        console.log(`Error in follw and Unfollow controller : ${error}`)
        res.status(500).json({error: "Internal server error"})   
    }
}