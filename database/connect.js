// connect to database mysql

const mysql = require("mysql");
const connection = mysql.createConnection({
    host : "localhost",
    user : "nofrisdan",
    password : "N03D0600",
    database : "18030046"
})


connection.connect(error => {
    if(error){
        throw error;
    }

    console.log("Database Connect");
})


module.exports = connection;