
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {createAccessToken} from "../libs/jwt.js"


/* REGISTER */
export const register = async (req, res) => { 
    const {email, password, username}= (req.body)

    try {

        const userFound = await User.findOne({email})
        if(userFound) 
            return res.status(400).json (["The email already exists"])

        const passwordHash = await bcrypt.hash(password, 10) // un string aleatorio

        const newUser = new User ({
            username,
            email,
            password: passwordHash
        });
    
        const userSaved = await newUser.save();
        
        const token = await createAccessToken({id:userSaved._id})

        res.cookie('token', token);
        res.json({
            /* message: "User created successfully", */
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

/* LOGIN */
export const login = async (req, res) => { 
    const { email, password }= (req.body)

    try {

        const userFound = await User.findOne ({ email });
        if ( !userFound ) return res.status(400).json({message:"User Not Found"});

        const isMatch = await bcrypt.compare(password, userFound.password); // un string aleatorio

        if (!isMatch) return res.status(400).json({message: "Incorrect password"});

        const token = await createAccessToken({id: userFound._id})

        res.cookie('token', token);
        res.json({
            /* message: "User created successfully", */
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

/* LOGOUT */
export const logout = (req, res) => { 
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

/* PROFILE */

export const profile = async (req, res) => {
    const userFound =  await User.findById(req.user.id)

    if (!userFound) return res.status(404).json({message : 'Profile not found'});

    return res.json({ 
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });

    console.log(req.user)
    res.send('profile');

};







