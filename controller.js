"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi REST API Berjalan ! ", res);
};

// Menampilkan semua data
exports.tampilsemuamahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fileds) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// Menampilkan semua data mahasiswa berdasarkan id
exports.tampilid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fileds) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
