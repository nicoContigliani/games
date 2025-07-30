'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchUsers, addUser, setCurrentUser, clearCurrentUser } from '@/store/slices/userSlice';
import type { User, UserInput } from '@/types/user';

export default function UserManager() {
  const dispatch = useAppDispatch();
  const { users, currentUser, status, error } = useAppSelector((state) => state.user);
  
  const [newUser, setNewUser] = useState<any>({ 
    name: '', 
    email: '' 
  });
  const [editMode, setEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // Cargar usuarios al montar el componente
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editMode && currentUserId) {
      // Lógica para actualizar usuario (implementar en tu API y slice)
      // await dispatch(updateUser({ id: currentUserId, ...newUser }));
    } else {
      await dispatch(addUser(newUser));
    }
    
    resetForm();
    dispatch(fetchUsers()); // Recargar lista después de la operación
  };

  // Editar usuario
  const handleEdit = (user: User) => {
    setNewUser({
      name: user.name,
      email: user.email
    });
    setCurrentUserId(user.id);
    setEditMode(true);
    dispatch(setCurrentUser(user));
  };

  // Eliminar usuario (implementar en tu API y slice)
  const handleDelete = async (userId: string) => {
    // await dispatch(deleteUser(userId));
    dispatch(fetchUsers()); // Recargar lista después de eliminar
  };

  // Resetear formulario
  const resetForm = () => {
    setNewUser({ name: '', email: '' });
    setEditMode(false);
    setCurrentUserId(null);
    dispatch(clearCurrentUser());
  };

  // Manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev:any) => ({
      ...prev,
      [name]: value
    }));
  };

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Usuarios</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            {editMode ? 'Editar Usuario' : 'Agregar Nuevo Usuario'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                required
              />
            </div>
            
            <div className="flex space-x-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {editMode ? 'Actualizar' : 'Agregar'}
              </button>
              
              {editMode && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
          
          {currentUser && (
            <div className="mt-6 p-4 bg-blue-50 rounded-md">
              <h3 className="font-medium text-blue-800">Usuario seleccionado:</h3>
              <p className="text-blue-700">{currentUser.name} - {currentUser.email}</p>
            </div>
          )}
        </div>
        
        {/* Lista de Usuarios */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Lista de Usuarios</h2>
          
          {users.length === 0 ? (
            <p className="text-gray-500">No hay usuarios registrados</p>
          ) : (
            <div className="space-y-3">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className={`p-4 border rounded-md flex justify-between items-center ${
                    currentUser?.id === user.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(user)}
                      className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 text-sm"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}