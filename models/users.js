const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const Users = sequelize.define('users', {
  id_user: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  access_token: {
    type: Sequelize.STRING(300),
    allowNull: false
  },
  token_type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expires_in: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  refresh_token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  scope: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
    schema: 'spotifai',
    createdAt: true,
    updatedAt: true,
    freezeTableName: true
}
);

module.exports = Users