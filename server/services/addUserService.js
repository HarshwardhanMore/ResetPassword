const db = require('../models');

const User = db.user;

exports.addUser = async (userDetails)=>{

    try {
        const newUser = await User.create(userDetails)
        return newUser;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}