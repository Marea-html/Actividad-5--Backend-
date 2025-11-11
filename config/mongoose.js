// config/mongoose.js
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error('MONGO_URI no definido en .env');
}

const connectMongo = async () => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      maxPoolSize: 10,
    });
    console.log('[MongoDB] Conectado');
  } catch (err) {
    console.error('[MongoDB] Error de conexión:', err.message);
    process.exit(1);
  }
};

module.exports = { connectMongo };

