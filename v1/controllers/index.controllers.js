import { getToken } from "../../utils/token/getToken.js";

const user = {
    email: 'ejemplo',
    username: 'ejemplo',
    bio: 'hola',
    image: 'imagen',
}

export default {
    postValidateAuth: (req, res) => {
        res.json({ user, authorization: getToken()});
    },
    getUser: (req, res) => {
        res.json({ user, authorization: getToken() });
    }
}


