import { comparePassword } from "../../utils/hash/index.hash.js";
import { getToken, verifyToken } from "../../utils/token/index.token.js";
import { getUser } from "../services/index.services.js";

const user = {
    email: 'ejemplo',
    username: 'ejemplo',
    bio: 'hola',
    image: 'imagen',
}

export default {
    authenticateToken: (req,res, next)=>{
        const token = req.cookies.token?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        try {
            verifyToken(token);
            next();
        } catch (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
    },
    postValidateAuth: async(req,res) =>{
        try {
            const { email, password } = req.body;
            // Valide email and password from body
            if(!email || !password){
                return res.status(403).json({message: "Invalid user body"});
            }

            // get data from DB
            const user = await getUser(email);

            // If user doesn't exist
            if(user === null){
                return res.status(401).json({message: "Invalid user"});
            }
            // Validate Password
            const match = await comparePassword(password, user.hashPassword );

            if(!match){
                return res.status(401).json({message: "Invalid password"});
            }
    
            console.log()

            res.cookie(
                'token', 
                `Bearer ${getToken()}`,
                {
                    httpOnly: true, // Only for dev
                    secure: false, // Only for dev
                }
            ).status(202).json(
                {
                    email: user.email,
                    username: user.userName,
                    bio: user.bio
                }
            );
    
        } catch (error) {
            return res.status(403).json({message: error});
        }
    },
    getUser: (req, res) => {
        try {  
        } catch (error) {
            return res.json({message: error});
        }
        return res.json({ user });
    }
}


