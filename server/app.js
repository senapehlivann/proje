const express = require('express');
const path = require('path');
const genelRoutes = require('./routes/genelRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statik dosyalar (client klasörünü sun)
app.use(express.static(path.join(__dirname, '../client')));

// API rotaları
app.use('/api', genelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
