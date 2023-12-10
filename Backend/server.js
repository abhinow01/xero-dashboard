import bodyParser from 'body-parser';
import express from 'express';
import jwt from 'jsonwebtoken';

app.use(express.json());
const SECRET = 'SECr3t';  

const authenticateJwt = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(authHeader){
      const token = authHeader.split(' ')[1];
      jwt.verify(token, SECRET,(err,user)=>{
       if(err){
        return res.sendStatus(403);
       } 
       req.user = user;
        next();
      })}else{
        res.sendStatus(401);
       }  
};

app.post('/signup',(req,res)=>{
    const {username,password} = req.body;
    function callback (user){
        if(user){
            res.status(403).json({message:"user already exists"});
        }else{
            const obj= {username: username,password: password};
            const admin = new User(obj);
            newAdmin.save();
            const token = jwt.sign({username},SECRET,{expiresIn:'1h'});
            res.json({ message: 'user created successfully', token });

        }
    }
    User.findOne({username}).then(callback);
});
