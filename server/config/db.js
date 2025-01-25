const mysql = require('mysql2');



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'odev'
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL veritabanına başarıyla bağlanıldı.');
});

module.exports = connection;
