const Sequelize = require("sequelize");


// var port = 1433
// var user = "SpotifAI-User"
// var password = "dbpass01."
// var database = "db-SpotifAI-prod-001"

// Connect to database
const password = "dbpass01."
const db_name = "db-SpotifAI-prod-001"
const user = "SpotifAI-User"
var server = "sv-spotifai-prod-001.database.windows.net"
const sequelize = new Sequelize(db_name, user, password, {
    host: server,
    dialect: "mssql",
    dialectOptions: {
        instanceName:  "ORBITALPC",
        encrypt: true,
        trustServerCertificate: true
    },
    logging: false
});

module.exports = sequelize;