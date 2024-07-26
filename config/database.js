// config/database.js
const mongoose = require('mongoose');
const { Sequelize } = require('sequelize');

// MongoDB connection
const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://surendra:singh123@cluster0.ztxomvh.mongodb.net/Invoices');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

// PostgreSQL connection
const sequelize = new Sequelize('postgres://postgres:techy_singh@localhost:5432/invoices', {
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
