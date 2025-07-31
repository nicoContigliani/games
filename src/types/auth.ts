// export interface LoginCredentials {
//     email: string;
//     password: string;
//   }
  
//   export interface RegisterData {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
//   }
  
//   export interface AuthState {
//     token: string | null;
//     isAuthenticated: boolean;
//     isLoading: boolean;
//     error: string | null;
//   }


export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface DecodedToken {
  userId: string;
  email: string;
  name?: string;  // Opcional
  role?: string;  // Opcional
  iat: number;
  exp: number;
}