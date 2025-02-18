const env = process.env;

export const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'localhost',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'admin',
    password: env.DB_PASSWORD || 'admin',
    database: env.DB_NAME || 'car_sale_db',
  },
};