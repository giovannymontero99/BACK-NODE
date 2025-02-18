import bcrypt from "bcrypt";



export async function hashPassword(password) {
    const saltRounds = 14.3; // Adjust this value (higher = more secure, but slower)
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

export async function comparePassword(password, hashedPassword) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match; // Returns true if the passwords match, false otherwise

}