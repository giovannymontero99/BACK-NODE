-- TABLE users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_username VARCHAR(50) UNIQUE NOT NULL,
    user_email VARCHAR(100) UNIQUE NOT NULL,
    user_password_hash TEXT NOT NULL,
    user_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_updated_at TIMESTAMP,
    user_active BOOL
);

-- TABLE profiles

CREATE TABLE profiles (
    prof_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE REFERENCES users(user_id),
    prof_firstname VARCHAR(50),
    prof_lastname VARCHAR(50),
    prof_dateofbirth DATE,
    prof_gender VARCHAR(10),
    prof_bio TEXT,
    prof_profilepicture VARCHAR(255)
);