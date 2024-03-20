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
    },
    getByID: (id, callback) => {
        pool.query(
            `SELECT * FROM Usuario WHERE UsuarioID = ?`,
            [
                id
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    }

};


