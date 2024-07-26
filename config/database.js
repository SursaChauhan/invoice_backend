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

// PostgreSQL connection
const sequelize = new Sequelize(process.env.Postgre_Url, {
    logging: console.log,  // This will log SQL queries to the console
  });
// Test PostgreSQL connection
const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('PostgreSQL connection error:', error);
  }
};

module.exports = {
  connectMongoDB,
  connectPostgres,
  sequelize,
};
