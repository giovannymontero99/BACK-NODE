import { query } from "../../services/db.js";

export async function getUser(email){

    let queryResponse = await query(
        `SELECT 
            u.user_username, 
	        u.user_email, 
	        u.user_password_hash,
	        p.prof_firstname,
	        p.prof_bio,
	        p.prof_bio
        FROM users u 
        JOIN profiles p on p.user_id = u.user_id
        WHERE u.user_email = $1`, 
        [email]
    );

    if(queryResponse.length === 0){
        return null
    }

    queryResponse = queryResponse.map( el =>{
        return {
            email: el.user_email,
            userName: el.user_username,
            bio: el.prof_bio,
            hashPassword: el.user_password_hash
        }
    });
    return queryResponse[0];
}