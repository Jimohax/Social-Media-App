import UserModel from '../Models/userModel.js'


// Get a user

export const getUser = async(req, res)=>{
const id = req.params.id ;

try {
    const user = await UserModel.findById(id);

    if (user) {
        req.status(200).json(user);
    }
} catch (error) {
    req.status(500).json("error")
}
}