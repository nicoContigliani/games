// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';

// export const hashPassword = async (password: string): Promise<string> => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// export const comparePasswords = async (
//   password: string,
//   hashedPassword: string
// ): Promise<boolean> => {
//   return await bcrypt.compare(password, hashedPassword);
// };

// export const generateToken = (userId: string, email: string): string => {
//   return jwt.sign({ userId, email }, SECRET_KEY, {
//     expiresIn: '1d',
//   });
// };

// export const verifyToken = (token: string): jwt.JwtPayload => {
//   return jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
// };


import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { DecodedToken } from '@/types/auth';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key-here';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string, email: string): string => {
  return jwt.sign({ userId, email }, SECRET_KEY, {
    expiresIn: '1d',
  });
};

export const verifyToken = (token: string): jwt.JwtPayload => {
  return jwt.verify(token, SECRET_KEY) as jwt.JwtPayload;
};


export function decodeToken(token: string): DecodedToken {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as DecodedToken;
    return decoded;
  } catch (error) {
    console.error('Error decoding token:', error);
    throw new Error('Invalid token');
  }
}

