const config = require('../config');
const db = require('../models');
const jwt = require('jsonwebtoken');

const User = db.user;

let user = {
    id: "abc",
    email: "harshawardhanmore14@gmail.com",
    password: "abc"
}

exports.resetPassword = async ({id, token, password1})=>{

    // try {
    //     const newUser = await User.create(userDetails)
    //     return newUser;
    // } catch (error) {
    //     throw new Error("Error adding user enquiry"+error.message);
    // }

    console.log("Recieved password : "+ password1);
    console.log("Old password  : "+ user.password);

    // check if this id exist in database
    if(id != user.id){
        res.send("Invalid Id");
        return ;
    }
    
    // we have valid id and user
    const secret = config.JWT_SECRET + user.password;

    try {
        const payload = jwt.verify(token, secret); // if this succeeds then below code runs else catch block

        // we can validate the password1 == password2 here but better do it on client side.

        // find the user with payload id and email to make changes in password in database.
        // hash the password before sending.
        user.password = password1;
        // res.send(user);
        console.log("Updated user");
        console.log(user);
        
        console.log("New password : "+ user.password);

    } catch (error) {
        console.log(error.message);
        // res.send(error.message);
    }


    // console.log("Forgot Password Password : ");
    // console.log(password);
}