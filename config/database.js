// config/database.js
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');
const dotenv =require('dotenv')
// MongoDB connection
dotenv.config();
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const postgresUrl =   'postgresql://invoice_agcu_user:8hSg3ILOEuRDHBGq33gX3aeDzAuAVCIp@dpg-cqhudg9u0jms739dh9s0-a.singapore-postgres.render.com/invoice_agcu' || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
// PostgreSQL connection
// const sequelize = new Sequelize(postgresUrl, {
//     logging: console.log,  // This will log SQL queries to the console
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false // This option allows self-signed certificates
//       }
//     }
//   });
// Test PostgreSQL connection
// const connectPostgres = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connected to PostgreSQL');
//   } catch (error) {
//     console.error('PostgreSQL connection error:', error);
//   }
// };

module.exports = {
  connectMongoDB,
//   connectPostgres,
//   sequelize,
};
