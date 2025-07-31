// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { LoginCredentials, RegisterData, AuthState } from '@/types/auth';
// import type { RootState, AppThunk } from '../index';
// import { setCurrentUser, clearCurrentUser } from './userSlice';
// import { jwtDecode } from 'jwt-decode';

// // Define el tipo de estado inicial
// const initialState: AuthState = {
//   token: null,
//   isAuthenticated: false,
//   isLoading: false,
//   error: null,
// };

// // Thunk para login
// export const login = createAsyncThunk<
//   { token: string },
//   LoginCredentials,
//   { state: RootState }
// >(
//   'auth/login',
//   async (credentials, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to login');
//       }

//       const { token } = await response.json();
      
//       // Decodificar el token para obtener información del usuario
//       const decoded: any = jwtDecode(token);
//       const user = {
//         id: decoded.userId,
//         email: decoded.email,
//         name: decoded.name || '',
//       };

//       // Guardar el token en localStorage (o cookies)
//       localStorage.setItem('token', token);
      
//       // Actualizar el estado del usuario
//       dispatch(setCurrentUser(user));

//       return { token };
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// // Thunk para registro
// export const register = createAsyncThunk<
//   { token: string },
//   RegisterData,
//   { state: RootState }
// >(
//   'auth/register',
//   async (userData, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await fetch('/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to register');
//       }

//       const { token } = await response.json();
      
//       // Decodificar el token para obtener información del usuario
//       const decoded: any = jwtDecode(token);
//       const user = {
//         id: decoded.userId,
//         email: decoded.email,
//         name: decoded.name || userData.name,
//       };

//       // Guardar el token en localStorage (o cookies)
//       localStorage.setItem('token', token);
      
//       // Actualizar el estado del usuario
//       dispatch(setCurrentUser(user));

//       return { token };
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// // Thunk para logout
// export const logout = (): AppThunk => (dispatch) => {
//   localStorage.removeItem('token');
//   dispatch(clearCurrentUser());
//   dispatch(authActions.clearAuth());
// };

// // Thunk para cargar el usuario desde el token almacenado
// export const loadUser = (): AppThunk => (dispatch, getState) => {
//   const token = localStorage.getItem('token');
  
//   if (token && !getState().auth.isAuthenticated) {
//     try {
//       const decoded: any = jwtDecode(token);
//       const user = {
//         id: decoded.userId,
//         email: decoded.email,
//         name: decoded.name || '',
//       };
      
//       dispatch(authActions.setAuth({ token }));
//       dispatch(setCurrentUser(user));
//     } catch (error) {
//       console.error('Error decoding token:', error);
//       localStorage.removeItem('token');
//     }
//   }
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setAuth: (state, action: PayloadAction<{ token: string }>) => {
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//     },
//     clearAuth: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isAuthenticated = true;
//         state.token = action.payload.token;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload as string;
//       })
//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isAuthenticated = true;
//         state.token = action.payload.token;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginCredentials, RegisterData, AuthState } from '@/types/auth';
import type { RootState, AppThunk } from '../index';
import { setCurrentUser, clearCurrentUser } from './userSlice';
import { decodeToken } from '@/lib/auth';

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk<
  { token: string; user: any },
  LoginCredentials,
  { state: RootState }
>(
  'auth/login',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }

      const { token, user } = await response.json();
      
      // Guardar el token en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      
      // Actualizar el estado del usuario
      dispatch(setCurrentUser(user));

      return { token, user };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const register = createAsyncThunk<
  { token: string },
  RegisterData,
  { state: RootState }
>(
  'auth/register',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register');
      }

      const { token } = await response.json();
      
      // Decodificar el token para obtener información del usuario
      const decoded = decodeToken(token);
      const user = {
        id: decoded.userId,
        email: decoded.email,
        name: decoded.name || userData.name,
        role: decoded.role || 'user',
      };

      // Guardar el token en localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
      
      // Actualizar el estado del usuario
      dispatch(setCurrentUser(user));

      return { token };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logout = (): AppThunk => (dispatch) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
  dispatch(clearCurrentUser());
  dispatch(authActions.clearAuth());
};

export const loadUser = (): AppThunk => (dispatch, getState) => {
  if (typeof window === 'undefined') return;

  const token = localStorage.getItem('token');
  
  if (token && !getState().auth.isAuthenticated) {
    try {
      const decoded = decodeToken(token);
      const user = {
        id: decoded.userId,
        email: decoded.email,
        name: decoded.name || '',
        role: decoded.role || 'user',
      };
      
      dispatch(authActions.setAuth({ token }));
      dispatch(setCurrentUser(user));
    } catch (error) {
      console.error('Error decoding token:', error);
      localStorage.removeItem('token');
    }
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    clearAuth: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string || 'Error desconocido al iniciar sesión';
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string || 'Error desconocido al registrarse';
      });
  },
});

export const authActions = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;

export default authSlice.reducer;