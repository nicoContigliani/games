// // // components/UserList.tsx
// // 'use client';

// // import { useState, useEffect } from 'react';

// // interface User {
// //   _id: string;
// //   name: string;
// //   email: string;
// //   // otras propiedades
// // }

// // export default function UserList() {
// //   const [users, setUsers] = useState<User[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const response = await fetch('/api/users');
// //         console.log("🚀 ~ fetchUsers ~ response:", response)

// //         if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //         }

// //         const data = await response.json();
// //         setUsers(data);
// //       } catch (err) {
// //         setError(err instanceof Error ? err.message : 'An unknown error occurred');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error}</div>;

// //   return (
// //     <div>
// //       <h2>Lista de Usuarios</h2>
// //       <ul>
// //         {users?.map(user => (
// //           <li key={user._id}>
// //             {user.name} - {user.email}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }



// // components/UserList.tsx
// 'use client';

// import { useState, useEffect } from 'react';

// interface User {
//     _id: string;
//     name: string;
//     email: string;
// }

// export default function UserList() {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [newUser, setNewUser] = useState<Omit<User, '_id'>>({ name: '', email: '' });
//     const [isCreating, setIsCreating] = useState(false);

//     // Obtener lista de usuarios
//     const fetchUsers = async () => {
//         try {
//             const response = await fetch('/api/users');

//             if (!response.ok) {
//                 throw new Error('Error al obtener usuarios');
//             }

//             const data = await response.json();
//             setUsers(data);
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'Error desconocido');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Crear nuevo usuario
//     const createUser = async () => {
//         try {
//             setIsCreating(true);
//             const response = await fetch('/api/users', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newUser),
//             });

//             if (!response.ok) {
//                 throw new Error('Error al crear usuario');
//             }

//             // Actualizar lista después de crear
//             await fetchUsers();
//             setNewUser({ name: '', email: '' });
//         } catch (err) {
//             setError(err instanceof Error ? err.message : 'Error al crear usuario');
//         } finally {
//             setIsCreating(false);
//         }
//     };

//     // Cargar usuarios al montar el componente
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     // Manejar cambios en el formulario
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setNewUser(prev => ({ ...prev, [name]: value }));
//     };

//     // Manejar envío del formulario
//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         createUser();
//     };

//     if (loading) return <div>Cargando usuarios...</div>;
//     if (error) return <div className="text-red-500">Error: {error}</div>;

//     return (
//         <div className="max-w-md mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>

//             {/* Formulario para crear usuario */}
//             <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg bg-gray-50">
//                 <h3 className="text-lg font-semibold mb-3">Crear Nuevo Usuario</h3>

//                 <div className="mb-3">
//                     <label className="block mb-1">Nombre:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={newUser.name}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label className="block mb-1">Email:</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={newUser.email}
//                         onChange={handleInputChange}
//                         className="w-full p-2 border rounded"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={isCreating}
//                     className={`px-4 py-2 rounded text-white ${isCreating ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
//                 >
//                     {isCreating ? 'Creando...' : 'Crear Usuario'}
//                 </button>
//             </form>

//             {/* Lista de usuarios */}
//             <div className="border rounded-lg overflow-hidden">
//                 {users.length === 0 ? (
//                     <p className="p-4 text-gray-500">No hay usuarios registrados</p>
//                 ) : (
//                     <ul className="divide-y">
//                         {users && users?.map(user => (
//                             <li key={user?._id} className="p-3 hover:bg-gray-50">
//                                 <p className="font-medium">{user?.name}</p>
//                                 <p className="text-sm text-gray-600">{user?.email}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>
//         </div>
//     );
// }



// components/UserList.tsx
'use client';

import { useState, useEffect } from 'react';

interface User {
    _id: string;
    name: string;
    email: string;
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [newUser, setNewUser] = useState<Omit<User, '_id'>>({ name: '', email: '' });
    const [isCreating, setIsCreating] = useState(false);

    // Obtener lista de usuarios con manejo de errores mejorado
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/users');

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Asegurarse que data es un array
            if (!Array.isArray(data)) {
                throw new Error('La respuesta no es un array de usuarios');
            }

            setUsers(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError(err instanceof Error ? err.message : 'Error desconocido');
            setUsers([]); // Resetear a array vacío
        } finally {
            setLoading(false);
        }
    };

    // Crear nuevo usuario
    const createUser = async () => {
        try {
            setIsCreating(true);
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Error al crear usuario');
            }

            await fetchUsers();
            setNewUser({ name: '', email: '' });
        } catch (err) {
            console.error('Error creating user:', err);
            setError(err instanceof Error ? err.message : 'Error al crear usuario');
        } finally {
            setIsCreating(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createUser();
    };

    if (loading) return <div className="p-4 text-center">Cargando usuarios...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Usuarios</h2>

            {/* Formulario para crear usuario */}
            <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded-lg bg-gray-50">
                <h3 className="text-lg font-semibold mb-3">Crear Nuevo Usuario</h3>

                <div className="mb-3">
                    <label className="block mb-1">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={newUser.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={newUser.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isCreating}
                    className={`px-4 py-2 rounded text-white ${isCreating ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isCreating ? 'Creando...' : 'Crear Usuario'}
                </button>
            </form>

            {/* Lista de usuarios con verificación adicional */}
            <div className="border rounded-lg overflow-hidden">
                {!users || users.length === 0 ? (
                    <p className="p-4 text-gray-500">No hay usuarios registrados</p>
                ) : (
                    <ul className="divide-y">
                        {users.map(user => (
                            <li key={user._id} className="p-3 hover:bg-gray-50">
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}