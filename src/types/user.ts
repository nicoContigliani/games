import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;  // ID de MongoDB
  id: string;      // Tu ID personalizado (opcional)
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserState {
  users: User[];
  currentUser: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Tipo para crear nuevos usuarios (sin _id)
export type UserInput = Omit<User, '_id' | 'createdAt' | 'updatedAt'>;