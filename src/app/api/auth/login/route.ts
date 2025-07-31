// // import { NextResponse } from 'next/server';
// // import bcrypt from 'bcryptjs';
// // import jwt from 'jsonwebtoken';
// // import { getUsersCollection } from '@/db/mongodb';

// // export async function POST(request: Request) {
// //   try {
// //     const { email, password } = await request.json();

// //     if (!email || !password) {
// //       return NextResponse.json(
// //         { message: 'Email y contraseña son requeridos' },
// //         { status: 400 }
// //       );
// //     }

// //     const usersCollection = await getUsersCollection();
// //     const user = await usersCollection.findOne({ email });

// //     if (!user) {
// //       return NextResponse.json(
// //         { message: 'Credenciales inválidas' },
// //         { status: 401 }
// //       );
// //     }

// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return NextResponse.json(
// //         { message: 'Credenciales inválidas' },
// //         { status: 401 }
// //       );
// //     }

// //     const token = jwt.sign(
// //       {
// //         userId: user._id.toString(),
// //         email: user.email,
// //         name: user.name,
// //         role: user.role,
// //       },
// //       process.env.JWT_SECRET || 'your-secret-key',
// //       { expiresIn: '7d' }
// //     );

// //     return NextResponse.json({ token });
// //   } catch (error) {
// //     console.error('Error en el login:', error);
// //     return NextResponse.json(
// //       { message: 'Error interno del servidor' },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { getUsersCollection } from '@/db/mongodb';

// export async function POST(request: Request) {
//   try {
//     const { email, password } = await request.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { message: 'Email y contraseña son requeridos' },
//         { status: 400 }
//       );
//     }

//     const usersCollection = await getUsersCollection();
//     const user = await usersCollection.findOne({ email });
//     console.log(user,"*************")

//     if (!user) {
//       return NextResponse.json(
//         { message: 'Credenciales inválidas' },
//         { status: 401 }
//       );
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json(
//         { message: 'Credenciales inválidas' },
//         { status: 401 }
//       );
//     }

//     // Convert ObjectId to string
//     const userId = user._id.toString();

//     const token = jwt.sign(
//       {
//         userId,
//         email: user.email,
//         name: user.name,
//         role: user.role,
//       },
//       process.env.JWT_SECRET || 'your-secret-key',
//       { expiresIn: '7d' }
//     );

//     return NextResponse.json({ 
//       token,
//       user: {
//         id: userId,
//         email: user.email,
//         name: user.name,
//         role: user.role,
//         createdAt: user.createdAt,
//         updatedAt: user.updatedAt
//       }
//     });
//   } catch (error) {
//     console.error('Error en el login:', error);
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
interface TokenPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
}
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    const usersCollection = await getUsersCollection();
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: 'Credenciales inválidas' },
        { status: 401 }
      );
    }

    // Convert ObjectId to string
    const userId = user._id.toString();

    // Crear payload con tipo explícito
    const tokenPayload: TokenPayload = {
      userId,
      email: user.email,
      name: user.name,
      role: user.role || 'user' // Valor por defecto si no existe
    };

    const token = jwt.sign(
      tokenPayload,
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '7d' }
    );

    return NextResponse.json({
      token,
      user: {
        id: userId,
        email: user.email,
        name: user.name,
        role: user.role || 'user',
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}