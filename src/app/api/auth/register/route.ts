// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { getUsersCollection } from '@/db/mongodb';

// export async function POST(request: Request) {
//   try {
//     const { name, email, password } = await request.json();

//     // Validación básica
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { message: 'Todos los campos son requeridos' },
//         { status: 400 }
//       );
//     }

//     const usersCollection = await getUsersCollection();

//     // Verificar si el usuario ya existe
//     const existingUser = await usersCollection.findOne({ email });
//     if (existingUser) {
//       return NextResponse.json(
//         { message: 'El email ya está registrado' },
//         { status: 409 }
//       );
//     }

//     // Hash de la contraseña
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Crear nuevo usuario
//     const newUser = {
//       name,
//       email,
//       password: hashedPassword,
//       role: 'user',
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     };

//     const result = await usersCollection.insertOne(newUser);

//     // Crear token JWT
//     const token = jwt.sign(
//       {
//         userId: result.insertedId.toString(),
//         email: newUser.email,
//         name: newUser.name,
//         role: newUser.role,
//       },
//       process.env.JWT_SECRET || 'your-secret-key',
//       { expiresIn: '7d' }
//     );

//     return NextResponse.json({ token }, { status: 201 });
//   } catch (error) {
//     console.error('Error en el registro:', error);
//     return NextResponse.json(
//       { message: 'Error interno del servidor' },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUsersCollection } from '@/db/mongodb';

// Interface para el payload del token
interface TokenPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Validación básica
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    const usersCollection = await getUsersCollection();

    // Verificar si el usuario ya existe
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'El email ya está registrado' },
        { status: 409 }
      );
    }

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear nuevo usuario
    const newUser = {
      name,
      email,
      password: hashedPassword,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);

    // Crear token JWT con tipo explícito
    const tokenPayload: TokenPayload = {
      userId: result.insertedId.toString(),
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    };

    const token = jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    return NextResponse.json({ token }, { status: 201 });
  } catch (error) {
    console.error('Error en el registro:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}