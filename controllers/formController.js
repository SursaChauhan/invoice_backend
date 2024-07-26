// controllers/formController.js
const MongoFormData = require('../models/MongoModel.js');
const PostgresFormData = require('../models/PostgresModel.js');
const { Pool } = require('pg');

// Controller to handle saving data in both databases
const saveFormData = async (req, res) => {
  const { currency,
    basicamt,
    taxamt,
    advancepaid,
    netpayable,
    alternatepayee1,
    alternatepayee2,
    city,
    street,
    country,
    ifsccode,
    accno,
    reference } = req.body;
console.log(req.body);
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'invoices',
        password: 'techy_singh',
        port: 5432, // default port for PostgreSQL
      });

    // console.log( currency,
    //     basicamt,
    //     taxamt,
    //     advancepaid,
    //     netpayable,
    //     alternatepayee1,
    //     alternatepayee2,
    //     city,
    //     street,
    //     country,
    //     ifscCode,
    //     accno,
    //     reference)
  try {
    // Save to MongoDB
    const mongoData = new MongoFormData({ currency,
        basicamt,
        taxamt,
        advancepaid,
        netpayable,
        alternatepayee1,
        alternatepayee2,
        city,
        street,
        country,
        ifsccode,
        accno,
        reference  });
    await mongoData.save();

    // // Save to PostgreSQL
//     const query = `
//     INSERT INTO "FormData"  (
//       currency, basicamt, taxamt, advancepaid, netpayable, 
//       alternatepayee1, alternatepayee2, city, street, country, 
//       ifsccode, accno, reference,"createdAt","updatedAt"
//     ) VALUES (
//       $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(),NOW()
//     )
//   `;
//   const values = [
//     currency, basicamt, taxamt, advancepaid, netpayable,
//     alternatepayee1, alternatepayee2, city, street, country,
//     ifsccode, accno, reference
//   ];

//   await pool.query(query, values);
    

    res.status(201).json({ message: 'Data saved successfully in both databases' });
  } catch (error) {
    console.error('Error saving data to PostgreSQL:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
};

module.exports = { saveFormData };
