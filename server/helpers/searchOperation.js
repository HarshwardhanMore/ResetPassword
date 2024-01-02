const db = require('../models');

const User = db.user;

exports.findUserByEmail = async (email)=>{

    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        if(user){
            return user;
        } else {
            console.log('User not found');
        }
    } catch (error) {
        throw new Error("Error finding user "+error.message);
    }
}
exports.findUserById = async (id)=>{

    try {
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        if(user){
            return user;
        } else {
            console.log('User not found');
        }
    } catch (error) {
        throw new Error("Error finding user "+error.message);
    }
}