const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('postgres://postgres:techy_singh@localhost:5432/invoices');

const FormData = sequelize.define('FormData', {
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    basicamt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    taxamt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    advancepaid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    netpayable: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alternatepayee1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alternatepayee2: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ifsccode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reference: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true // This enables `createdAt` and `updatedAt` fields
});

module.exports = { FormData, sequelize };
