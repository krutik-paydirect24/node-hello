const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Currency = sequelize.define('MCA_Currency', {
  currency_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  currency_code: {
    type: DataTypes.STRING(3), // ISO 3-letter code
    allowNull: false,
     unique: true
  },
  currency_name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  currency_symbol: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currency_flag: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currency_status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'MCA_Currencies',
  timestamps: false
});

module.exports = Currency;
