"use strict";

exports.ok = function (values, res) {
  var data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};

//  Response untuk nested matakuliah
exports.oknested = function (values, res) {
  // Lakukan akumulasi
  const hasil = values.reduce((akumulasikan, item) => {
    // Tentukan key grupnya
    if (akumulasikan[item.nama]) {
      // Buat variabel nama mahasiswa
      const group = akumulasikan[item.nama];
      // Cek jika isi array adalah matakukliah
      if (Array.isArray(group.matakuliah)) {
        // tambahkan value ke dalam group matakuliah
        group.matakuliah.push(item.matakuliah);
      } else {
        group.matakuliah = [group.matakuliah, item.matakuliah];
      }
    } else {
      akumulasikan[item.nama] = item;
    }
    return akumulasikan;
  }, {});

  var data = {
    status: 200,
    value: hasil,
  };

  res.json(data);
  res.end();
};
