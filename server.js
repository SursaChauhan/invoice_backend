// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectMongoDB, connectPostgres } = require('./config/database.js');
const formRoutes = require('./routes/formRoutes.js');
const cors =require('cors');
const dotenv = require('dotenv')
// Initialize Express
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to databases
connectMongoDB();
connectPostgres();

// Sync PostgreSQL models
require('./models/PostgresModel.js').sequelize.sync();

// Set up routes
app.get('/',(req,res)=>{
    res.json('Api is running...')
})
app.use('/form', formRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
