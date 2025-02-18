import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'JWT_SECRET_TEST';


export function getToken(){
    return jwt.sign(
        {
            id: '1',
            user: 'Giovanny',
            role: 'admin'
        },
        secret,
        {
            expiresIn: 1000 * 60
        }
    );
}

export function verifyToken(token){
    return jwt.verify(token, secret)
}