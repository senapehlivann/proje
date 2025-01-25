const db = require('../config/db');

const GenelModel = {
  // 1) Şubeler listesini çek
  getAllSubeler: (callback) => {
    const sql = 'SELECT * FROM subeler';
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      return callback(null, results);
    });
  },

  // 2) Ürünler listesini çek
  getAllUrunler: (callback) => {
    const sql = 'SELECT * FROM urunler';
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      return callback(null, results);
    });
  },

  // 3) Siparişler listesini çek
  getAllSiparisler: (callback) => {
    const sql = 'SELECT * FROM siparisler';
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      return callback(null, results);
    });
  },

  getAllMusteriAnaliz: (callback) => {
    const sql = 'SELECT * FROM sube_musteri_analiz';
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      return callback(null, results);
    });
  }

};

module.exports = GenelModel;
