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
    },
    updateByID: (data, callback) => {
        pool.query(`
            UPDATE Usuario
            SET Username = ?, Senha = ?
            WHERE UsuarioID = ?;`,
            [
                data.Username,
                data.Senha,
                data.UsuarioID
            ],
            (error, results, fields) => {
                if (error) {
                    callback(error);
                }
                return callback(null, results[0]);
            }
        );
    },
    deleteByID: (data, callback) => {
        pool.query(`
            DELETE FROM Usuario
            WHERE UsuarioID = ?;`,
            [
                data.UsuarioID
            ],
            (error, results, fields) => {
                if (error) {
                    callback(erro);
                }
                return callback(null, results[0]);
            }
        );
    }
};


