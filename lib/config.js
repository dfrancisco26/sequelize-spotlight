require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'yawp_development',
    host: '127.0.0.1',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  test: {
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || null,
    database: process.env.POSTGRES_DB_NAME || 'yawp_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};