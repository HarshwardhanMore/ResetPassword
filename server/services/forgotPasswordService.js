

const jwt = require('jsonwebtoken');
const db = require('../models');
const config = require('../config')
const User = db.user;


let user = {
    id: "abc",
    email: "harshawardhanmore14@gmail.com",
    password: "abc"
}

exports.forgotPassword = async ({email})=>{


    // console.log('Forgot Password Email : ');
    // console.log(email);

    
    
    // check user exist in database
    if(email != user.email){
        res.send("user does not exist");
        return;
    }

    // if exist, create one time link valid for 15 mins
    const secret = config.JWT_SECRET + user.password;
    const payload = {
        email: user.email,
        id: user.id,
    }
    const token = jwt.sign(payload, secret, {expiresIn: '15m'});
    const link = `${config.HOST_URL}/user/resetPassword/${user.id}/${token}`; // send this link to client email
    console.log(link);
    // res.send("Link has been sent successfully");
    // console.log(link);

    // return link;

    // try {
    //     const newUser = await User.create(userDetails)
    //     return newUser;
    // } catch (error) {
    //     throw new Error("Error adding user enquiry"+error.message);
    // }
}