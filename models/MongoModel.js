// models/MongoModel.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    currency: {
      type: String,
      required: true,
    },
    basicamt: {
      type: String,
      required: true,
    },
    taxamt: {
      type: String,
      required: true,
    },
    advancepaid: {
      type: String,
      required: true,
    },
    netpayable: {
      type: String,
      required: true,
    },
    alternatepayee1: {
      type: String,
      required: true,
    },
    alternatepayee2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    IfscCode: {
      type: String,
      required: true,
    },
    accno: {
      type: String,
      required: true,
    },
    reference: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const FormData = mongoose.model('FormData', formDataSchema);

module.exports = FormData;
