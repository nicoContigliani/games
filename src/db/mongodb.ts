import { MongoClient, Db } from 'mongodb';

// Variables de entorno (sin NEXT_PUBLIC_)
const uri:any = process.env.MONGO_URI_ATLAS;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error('La variable MONGODB_URI no está definida en el archivo .env');
}

if (!dbName) {
  throw new Error('La variable MONGODB_DB no está definida en el archivo .env');
}

// Cache para conexiones
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);

  // Solo cachear en desarrollo para evitar conexiones múltiples
  if (process.env.NODE_ENV === 'development') {
    cachedClient = client;
    cachedDb = db;
  }

  return { client, db };
}

// Función específica para usuarios
export async function getUsersCollection() {
  const { db } = await connectToDatabase();
  return db.collection('users');
}