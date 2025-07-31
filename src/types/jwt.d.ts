declare module 'jsonwebtoken' {
    export interface JwtPayload {
      userId: string;
      email: string;
    }

    export function sign(arg0: { userId: string; email: string; }, SECRET_KEY: string, arg2: { expiresIn: string; }): string {
        throw new Error('Function not implemented.');
    }

    export function verify(token: string, SECRET_KEY: string): JwtPayload {
        throw new Error('Function not implemented.');
    }

  export function decode(token: string): any {
    throw new Error('Function not implemented.');
  }
  }