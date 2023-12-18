require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env
const mongoose = require('mongoose');

// Obtener las variables de entorno o usar valores por defecto
const username = process.env.DB_USERNAME || 'denisitojoelito235';
const password = encodeURIComponent(process.env.DB_PASSWORD || 'Dennis.2003');
const databaseName = process.env.DB_NAME || 'PROJECT 0';

// Construir la URI de conexión a partir de las variables de entorno
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0.wnppr3g.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = connectDB;
