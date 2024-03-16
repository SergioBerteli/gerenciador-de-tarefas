const pool = require("../../config/databse.js");

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO Usuario (Username, Senha)
            VALUES (?,?)`,
            [
                data.Username,
                data.Senha
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getAll: callback => {
        pool.query(
            `SELECT * FROM Usuario`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
};


