const express = require('express');
const router = express.Router();
const GenelModel = require('../models/genelModel');

// Şubeler
router.get('/subeler', (req, res) => {
  GenelModel.getAllSubeler((err, subeler) => {
    if (err) {
      console.error('Şubeleri çekerken hata:', err);
      return res.status(500).json({ error: 'Sunucu hatası' });
    }
    return res.json(subeler);
  });
});

// Ürünler
router.get('/urunler', (req, res) => {
  GenelModel.getAllUrunler((err, urunler) => {
    if (err) {
      console.error('Ürünleri çekerken hata:', err);
      return res.status(500).json({ error: 'Sunucu hatası' });
    }
    return res.json(urunler);
  });
});

router.get('/musteri-analiz', (req, res) => {
  GenelModel.getAllMusteriAnaliz((err, results) => {
    if (err) {
      console.error('Müşteri analiz verileri çekilirken hata:', err);
      return res.status(500).json({ error: 'Sunucu hatası' });
    }
    return res.json(results);
  });
});

// Siparişler
router.get('/siparisler', (req, res) => {
  GenelModel.getAllSiparisler((err, siparisler) => {
    if (err) {
      console.error('Siparişleri çekerken hata:', err);
      return res.status(500).json({ error: 'Sunucu hatası' });
    }
    return res.json(siparisler);
  });
});








module.exports = router;
