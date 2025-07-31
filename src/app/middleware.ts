// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { verifyToken } from '@/lib/auth';

// export async function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;
//   const { pathname } = request.nextUrl;

//   // Rutas públicas que no requieren autenticación
//   const publicPaths = ['/auth', '/login', '/register'];
  
//   // Si el usuario está autenticado y trata de acceder a una ruta pública
//   if (token && publicPaths.some(path => pathname.startsWith(path))) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   // Rutas protegidas
//   const protectedPaths = ['/dashboard', '/profile', '/settings'];
  
//   // Si no hay token y está intentando acceder a una ruta protegida
//   if (!token && protectedPaths.some(path => pathname.startsWith(path))) {
//     return NextResponse.redirect(new URL('/auth', request.url));
//   }

//   try {
//     if (token) {
//       // Verificar el token
//       const decoded = verifyToken(token);
      
//       // Añadir información del usuario a los headers
//       const requestHeaders = new Headers(request.headers);
//       requestHeaders.set('x-user-id', decoded.userId);
//       requestHeaders.set('x-user-email', decoded.email);
      
//       return NextResponse.next({
//         request: {
//           headers: requestHeaders,
//         },
//       });
//     }
//   } catch (error) {
//     console.error('Token verification failed:', error);
//     // Si el token es inválido, redirigir al login y borrar la cookie
//     const response = NextResponse.redirect(new URL('/auth', request.url));
//     response.cookies.delete('token');
//     return response;
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// };


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Rutas públicas
  const publicPaths = ['/auth', '/login', '/register'];
  
  // Si el usuario está autenticado y trata de acceder a una ruta pública
  if (token && publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Rutas protegidas
  const protectedPaths = ['/dashboard', '/profile', '/settings'];
  
  // Si no hay token y está intentando acceder a una ruta protegida
  if (!token && protectedPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  try {
    if (token) {
      // Verificar el token
      const decoded = verifyToken(token);
      
      // Añadir información del usuario a los headers
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', decoded.userId);
      requestHeaders.set('x-user-email', decoded.email);
      
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  } catch (error) {
    console.error('Token verification failed:', error);
    // Si el token es inválido, redirigir al login y borrar la cookie
    const response = NextResponse.redirect(new URL('/auth', request.url));
    response.cookies.delete('token');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};