import { NextResponse } from 'next/server';
import { getUsersCollection } from '@/db/mongodb';
import { UserInput } from '@/types/user';

export async function GET() {
  try {
    const collection = await getUsersCollection();
    const users = await collection.find().toArray();
    
    return NextResponse.json(users.map(user => ({
      ...user,
      _id: user._id.toString(),
      id: user._id.toString()
    })));
  } catch (error) {
    console.error('Error GET /api/users:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const userData: UserInput = await request.json();
    
    // Validación básica
    if (!userData.name?.trim() || !userData.email?.trim()) {
      return NextResponse.json(
        { error: 'Nombre y email son requeridos' },
        { status: 400 }
      );
    }

    const collection = await getUsersCollection();
    
    // Verificar email único
    const existingUser = await collection.findOne({ 
      email: userData.email 
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 409 }
      );
    }

    const newUser = {
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await collection.insertOne(newUser);
    
    return NextResponse.json({
      ...newUser,
      _id: result.insertedId.toString(),
      id: result.insertedId.toString()
    }, { status: 201 });

  } catch (error) {
    console.error('Error POST /api/users:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}