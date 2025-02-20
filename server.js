const express= require('express');
const app= express();
const port= 3000;
app.use(express.json());



let exisitingUsers=[
    {username:"Rachel", email:"rachel@gmail.com", password:"rachel@1010", dob:"01-09-2002"},
    {username:" Sarah", email:"sarah@gmail.com", password:"sarah@1010", dob:"01-09-2002"}

]
app.post('/signup', (req,res)=>{
    const {username, email , password, dob}= req.body;
    if(!username){
        return res.status(400).json({error:"Username cannot be empty"});

    }
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"});
        
    }
    if(!dob){
        return res.status(400).json({error:"Date of Birth cannot be empty "});
    }
    if(password.length>16 || password.length <8)
        return res.status(401).json({error:"Passwword length should be greater than 8 and less than or equal to 16 "});
})

app.get ('/user-info', (req,res)=>{
    const {username}= req.query;
    if(!username){
        return res.status(400).json({error:"Username is required"});
    }
    const currentUser= exisitingUsers.find(user=>user.username===username)
    if(!currentUser){
        return res.status(404).json({error:"User not found"});
    }
    return res.status(200).json({message:"User found", currentUser});
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})