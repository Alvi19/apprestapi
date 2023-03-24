"use strict";

module.exports = function (app) {
  var jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilsemuamahasiswa);
  app.route("/tampil/:id").get(jsonku.tampilid);
  app.route("/tambah").post(jsonku.tambahdata);
  app.route("/ubah").put(jsonku.ubahdata);
  app.route("/hapus").delete(jsonku.hapusdata);
};
