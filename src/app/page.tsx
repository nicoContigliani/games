// // // // // import Image from 'next/image'
// // // // // import styles from './page.module.css'

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <main className={styles.main}>
// // // // //       <div className={styles.description}>
// // // // //         <p>
// // // // //           Get started by editing&nbsp;
// // // // //           <code className={styles.code}>src/app/page.tsx</code>
// // // // //         </p>
// // // // //         <div>
// // // // //           <a
// // // // //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //           >
// // // // //             By{' '}
// // // // //             <Image
// // // // //               src="/vercel.svg"
// // // // //               alt="Vercel Logo"
// // // // //               className={styles.vercelLogo}
// // // // //               width={100}
// // // // //               height={24}
// // // // //               priority
// // // // //             />
// // // // //           </a>
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className={styles.center}>
// // // // //         <Image
// // // // //           className={styles.logo}
// // // // //           src="/next.svg"
// // // // //           alt="Next.js Logo"
// // // // //           width={180}
// // // // //           height={37}
// // // // //           priority
// // // // //         />
// // // // //       </div>

// // // // //       <div className={styles.grid}>
// // // // //         <a
// // // // //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// // // // //           className={styles.card}
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <h2>
// // // // //             Docs <span>-&gt;</span>
// // // // //           </h2>
// // // // //           <p>Find in-depth information about Next.js features and API.</p>
// // // // //         </a>

// // // // //         <a
// // // // //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// // // // //           className={styles.card}
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <h2>
// // // // //             Learn <span>-&gt;</span>
// // // // //           </h2>
// // // // //           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
// // // // //         </a>

// // // // //         <a
// // // // //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// // // // //           className={styles.card}
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <h2>
// // // // //             Templates <span>-&gt;</span>
// // // // //           </h2>
// // // // //           <p>Explore the Next.js 13 playground.</p>
// // // // //         </a>

// // // // //         <a
// // // // //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// // // // //           className={styles.card}
// // // // //           target="_blank"
// // // // //           rel="noopener noreferrer"
// // // // //         >
// // // // //           <h2>
// // // // //             Deploy <span>-&gt;</span>
// // // // //           </h2>
// // // // //           <p>
// // // // //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// // // // //           </p>
// // // // //         </a>
// // // // //       </div>
// // // // //     </main>
// // // // //   )
// // // // // }




// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import Image from 'next/image';
// // // // import {
// // // //   Box,
// // // //   Typography,
// // // //   Stack,
// // // //   useTheme,
// // // //   useMediaQuery,
// // // //   CircularProgress
// // // // } from '@mui/material';
// // // // import { motion } from 'framer-motion';
// // // // import dynamic from 'next/dynamic';
// // // // // import AuthForm from '@/components/AuthForm/AuthForm';

// // // // const AuthForm = dynamic(
// // // //   () => import('@/components/AuthForm/AuthForm'),
// // // //   { 
// // // //     loading: () => <CircularProgress color="secondary" />,
// // // //     ssr: false // Opcional: desactiva SSR si no es necesario
// // // //   }
// // // // );


// // // // export default function AuthPage() {
// // // //   const [hydrated, setHydrated] = useState(false);
// // // //   const theme = useTheme();
// // // //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// // // //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

// // // //   useEffect(() => {
// // // //     setHydrated(true);
// // // //   }, []);

// // // //   if (!hydrated) return null;

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         minHeight: '100vh',
// // // //         display: 'flex',
// // // //         flexDirection: isMobile ? 'column' : 'row',
// // // //         background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)',
// // // //         fontFamily: '"Poppins", Arial, sans-serif',
// // // //         overflow: 'auto',
// // // //         position: 'relative',
// // // //         '&::before': {
// // // //           content: '""',
// // // //           position: 'absolute',
// // // //           top: 0,
// // // //           left: 0,
// // // //           right: 0,
// // // //           bottom: 0,
// // // //           background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
// // // //           zIndex: 0
// // // //         }
// // // //       }}
// // // //     >
// // // //       {/* Sección de Branding */}
// // // //       <Box
// // // //         sx={{
// // // //           flex: isMobile ? '0 0 auto' : 1,
// // // //           bgcolor: 'rgba(255, 50, 50, 0.9)',
// // // //           display: 'flex',
// // // //           flexDirection: 'column',
// // // //           alignItems: 'center',
// // // //           justifyContent: isMobile ? 'center' : 'center',
// // // //           p: isMobile ? 2 : 4,
// // // //           color: '#fff',
// // // //           clipPath: isMobile ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
// // // //           textAlign: 'center',
// // // //           height: isMobile ? 'auto' : '100vh',
// // // //           minHeight: isMobile ? '30vh' : 'auto',
// // // //           position: 'relative',
// // // //           zIndex: 1,
// // // //           backdropFilter: 'blur(2px)'
// // // //         }}
// // // //         component={motion.div}
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ duration: 0.8 }}
// // // //       >
// // // //         <Box
// // // //           sx={{
// // // //             width: isMobile ? 80 : isTablet ? 120 : 150,
// // // //             height: isMobile ? 80 : isTablet ? 120 : 150,
// // // //             mb: isMobile ? 1 : 3,
// // // //             position: 'relative'
// // // //           }}
// // // //         >
// // // //           <Image
// // // //             src="/images/flama.png"
// // // //             alt="LlakaScript Logo"
// // // //             width={200}
// // // //             height={200}
// // // //             priority
// // // //             style={{
// // // //               objectFit: 'contain',
// // // //               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
// // // //             }}
// // // //           />
// // // //         </Box>

// // // //         <Typography
// // // //           variant="h1"
// // // //           sx={{
// // // //             fontSize: isMobile ? '1.2rem' : isTablet ? '1.8rem' : '2.2rem',
// // // //             fontWeight: 700,
// // // //             mb: 1,
// // // //             textShadow: '0 2px 4px rgba(0,0,0,0.3)',
// // // //             letterSpacing: '1px',
// // // //             lineHeight: 1.2
// // // //           }}
// // // //         >
// // // //           LlakaScript
// // // //         </Typography>
// // // //         <Typography
// // // //           variant="subtitle1"
// // // //           sx={{
// // // //             fontSize: isMobile ? '0.7rem' : '0.9rem',
// // // //             px: isMobile ? 1 : 2,
// // // //             opacity: 0.9,
// // // //             maxWidth: '90%',
// // // //             lineHeight: 1.4,
// // // //             mb: isMobile ? 2 : 0
// // // //           }}
// // // //         >
// // // //           Plataforma de juegos interactivos
// // // //         </Typography>
// // // //       </Box>

// // // //       {/* Sección de Autenticación */}
// // // //       <Box
// // // //         sx={{
// // // //           flex: isMobile ? '1 1 auto' : 1,
// // // //           p: isMobile ? 2 : 4,
// // // //           display: 'flex',
// // // //           flexDirection: 'column',
// // // //           justifyContent: isMobile ? 'flex-start' : 'center',
// // // //           alignItems: 'center',
// // // //           minHeight: isMobile ? 'auto' : '100vh',
// // // //           height: isMobile ? 'auto' : '100vh',
// // // //           position: 'relative',
// // // //           zIndex: 1,
// // // //           overflowY: 'auto',
// // // //           pb: isMobile ? 4 : 0
// // // //         }}
// // // //       >
// // // //         {/* Navbar solo en desktop */}
// // // //         {!isMobile && (
// // // //           <Stack
// // // //             direction="row"
// // // //             spacing={4}
// // // //             sx={{
// // // //               position: 'absolute',
// // // //               top: 20,
// // // //               right: 40,
// // // //               '& > *': {
// // // //                 transition: 'all 0.3s ease',
// // // //                 '&:hover': {
// // // //                   transform: 'translateY(-2px)',
// // // //                   textShadow: '0 2px 4px rgba(0,0,0,0.2)'
// // // //                 }
// // // //               }
// // // //             }}
// // // //           >
// // // //             {['Inicio', 'Nosotros', 'Contacto'].map((item) => (
// // // //               <Typography
// // // //                 key={item}
// // // //                 variant="button"
// // // //                 sx={{
// // // //                   color: '#fff',
// // // //                   fontWeight: 600,
// // // //                   cursor: 'pointer'
// // // //                 }}
// // // //               >
// // // //                 {item}
// // // //               </Typography>
// // // //             ))}
// // // //           </Stack>
// // // //         )}

// // // //         {/* Componente del Formulario */}
// // // //         <AuthForm isMobile={isMobile} isTablet={isTablet} />

// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // }



// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import Image from 'next/image';
// // // import { Box, Typography, Stack, useTheme, useMediaQuery, CircularProgress } from '@mui/material';
// // // import { motion } from 'framer-motion';
// // // import dynamic from 'next/dynamic';
// // // import { useRouter } from 'next/navigation';
// // // import { useAuth } from './hooks/useAuth';

// // // const AuthForm = dynamic(() => import('@/components/AuthForm/AuthForm'), { 
// // //   loading: () => <CircularProgress color="secondary" />,
// // //   ssr: false
// // // });

// // // export default function AuthPage() {
// // //   const [hydrated, setHydrated] = useState(false);
// // //   const { isAuthenticated, isLoading: authLoading } = useAuth();
// // //   const router = useRouter();
// // //   const theme = useTheme();
// // //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// // //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

// // //   useEffect(() => {
// // //     setHydrated(true);
// // //   }, []);

// // //   useEffect(() => {
// // //     if (isAuthenticated && !authLoading) {
// // //       router.push('/dashboard');
// // //     }
// // //   }, [isAuthenticated, authLoading, router]);

// // //   if (!hydrated || authLoading) return null;

// // //   return (
// // //     <Box
// // //       sx={{
// // //         minHeight: '100vh',
// // //         display: 'flex',
// // //         flexDirection: isMobile ? 'column' : 'row',
// // //         background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)',
// // //         fontFamily: '"Poppins", Arial, sans-serif',
// // //         overflow: 'auto',
// // //         position: 'relative',
// // //         '&::before': {
// // //           content: '""',
// // //           position: 'absolute',
// // //           top: 0,
// // //           left: 0,
// // //           right: 0,
// // //           bottom: 0,
// // //           background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
// // //           zIndex: 0
// // //         }
// // //       }}
// // //     >
// // //       {/* Sección de Branding */}
// // //       <Box
// // //         sx={{
// // //           flex: isMobile ? '0 0 auto' : 1,
// // //           bgcolor: 'rgba(255, 50, 50, 0.9)',
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           alignItems: 'center',
// // //           justifyContent: isMobile ? 'center' : 'center',
// // //           p: isMobile ? 2 : 4,
// // //           color: '#fff',
// // //           clipPath: isMobile ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
// // //           textAlign: 'center',
// // //           height: isMobile ? 'auto' : '100vh',
// // //           minHeight: isMobile ? '30vh' : 'auto',
// // //           position: 'relative',
// // //           zIndex: 1,
// // //           backdropFilter: 'blur(2px)'
// // //         }}
// // //         component={motion.div}
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 0.8 }}
// // //       >
// // //         <Box
// // //           sx={{
// // //             width: isMobile ? 80 : isTablet ? 120 : 150,
// // //             height: isMobile ? 80 : isTablet ? 120 : 150,
// // //             mb: isMobile ? 1 : 3,
// // //             position: 'relative'
// // //           }}
// // //         >
// // //           <Image
// // //             src="/images/flama.png"
// // //             alt="LlakaScript Logo"
// // //             width={200}
// // //             height={200}
// // //             priority
// // //             style={{
// // //               objectFit: 'contain',
// // //               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
// // //             }}
// // //           />
// // //         </Box>

// // //         <Typography
// // //           variant="h1"
// // //           sx={{
// // //             fontSize: isMobile ? '1.2rem' : isTablet ? '1.8rem' : '2.2rem',
// // //             fontWeight: 700,
// // //             mb: 1,
// // //             textShadow: '0 2px 4px rgba(0,0,0,0.3)',
// // //             letterSpacing: '1px',
// // //             lineHeight: 1.2
// // //           }}
// // //         >
// // //           LlakaScript
// // //         </Typography>
// // //         <Typography
// // //           variant="subtitle1"
// // //           sx={{
// // //             fontSize: isMobile ? '0.7rem' : '0.9rem',
// // //             px: isMobile ? 1 : 2,
// // //             opacity: 0.9,
// // //             maxWidth: '90%',
// // //             lineHeight: 1.4,
// // //             mb: isMobile ? 2 : 0
// // //           }}
// // //         >
// // //           Plataforma de juegos interactivos
// // //         </Typography>
// // //       </Box>

// // //       {/* Sección de Autenticación */}
// // //       <Box
// // //         sx={{
// // //           flex: isMobile ? '1 1 auto' : 1,
// // //           p: isMobile ? 2 : 4,
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           justifyContent: isMobile ? 'flex-start' : 'center',
// // //           alignItems: 'center',
// // //           minHeight: isMobile ? 'auto' : '100vh',
// // //           height: isMobile ? 'auto' : '100vh',
// // //           position: 'relative',
// // //           zIndex: 1,
// // //           overflowY: 'auto',
// // //           pb: isMobile ? 4 : 0
// // //         }}
// // //       >
// // //         <AuthForm isMobile={isMobile} isTablet={isTablet} />
// // //       </Box>
// // //     </Box>
// // //   );
// // // }


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import { Box, Typography, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
// // import { motion } from 'framer-motion';
// // import dynamic from 'next/dynamic';
// // import { useRouter } from 'next/navigation';
// // import { useAuth } from './hooks/useAuth';

// // const AuthForm = dynamic(() => import('@/components/AuthForm/AuthForm'), {
// //   loading: () => <CircularProgress color="secondary" />,
// //   ssr: false
// // });

// // export default function AuthPage() {
// //   const [hydrated, setHydrated] = useState(false);
// //   const { isAuthenticated, isLoading: authLoading } = useAuth();
// //   const router = useRouter();
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

// //   useEffect(() => {
// //     setHydrated(true);
// //   }, []);

// //   useEffect(() => {
// //     if (isAuthenticated && !authLoading) {
// //       router.push('/dashboard');
// //     }
// //   }, [isAuthenticated, authLoading, router]);

// //   if (!hydrated || authLoading) return null;

// //   return (
// //     <Box
// //       sx={{
// //         minHeight: '100vh',
// //         display: 'flex',
// //         flexDirection: isMobile ? 'column' : 'row',
// //         position: 'relative',
// //         fontFamily: '"Poppins", Arial, sans-serif',
// //         overflow: 'hidden',
// //         background: 'linear-gradient(to bottom, #ff0000, #ffeaea)',
// //       }}
// //     >
// //       {/* Fondo hexagonal desenfocado */}
// //       <Image
// //         src="/images/fondo.png"
// //         alt="hex bg"
// //         fill
// //         style={{ objectFit: 'cover', opacity: 0.25, zIndex: 0 }}
// //       />

// //       {/* Separador central con forma */}
// //       {!isMobile && (
// //         <Box
// //           sx={{
// //             position: 'absolute',
// //             top: 0,
// //             bottom: 0,
// //             left: '50%',
// //             width: 40,
// //             backgroundColor: '#e60000',
// //             clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)',
// //             zIndex: 3,
// //             boxShadow: '0 0 20px rgba(0,0,0,0.3)'
// //           }}
// //         />
// //       )}

// //       {/* Sección izquierda (branding/logo) */}
// //       <Box
// //         sx={{
// //           flex: 1,
// //           backgroundColor: 'rgba(255,0,0,0.9)',
// //           zIndex: 2,
// //           display: 'flex',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           flexDirection: 'column',
// //           p: 4,
// //           clipPath: isMobile ? 'none' : 'polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)',
// //         }}
// //         component={motion.div}
// //         initial={{ opacity: 0, x: -50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <Box sx={{ mb: 2 }}>
// //           <Image
// //             src="/images/flama.png"
// //             alt="Logo"
// //             width={200}
// //             height={200}
// //             style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}
// //           />
// //         </Box>
// //         <Typography
// //           variant="h3"
// //           sx={{
// //             color: 'white',
// //             fontWeight: 700,
// //             textShadow: '2px 2px 5px rgba(0,0,0,0.4)',
// //             mb: 1
// //           }}
// //         >
// //           Firefighter
// //         </Typography>
// //         <Typography
// //           sx={{
// //             color: 'white',
// //             fontSize: '1rem',
// //             maxWidth: 300,
// //             textAlign: 'center'
// //           }}
// //         >
// //           En cada llamada, un acto de entrega
// //         </Typography>
// //       </Box>

// //       {/* Sección derecha (formulario) */}
// //       <Box
// //         sx={{
// //           flex: 1,
// //           zIndex: 2,
// //           display: 'flex',
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           p: 4,
// //           clipPath: isMobile ? 'none' : 'polygon(5% 0, 100% 0, 100% 100%, 5% 100%, 0 50%)',
// //         }}
// //         component={motion.div}
// //         initial={{ opacity: 0, x: 50 }}
// //         animate={{ opacity: 1, x: 0 }}
// //         transition={{ duration: 0.8 }}
// //       >
// //         <Box
// //           sx={{
// //             background: 'rgba(255, 255, 255, 0.2)',
// //             backdropFilter: 'blur(10px)',
// //             borderRadius: '20px',
// //             p: 4,
// //             boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
// //             width: '100%',
// //             maxWidth: 400,
// //             border: '2px solid rgba(255,255,255,0.3)'
// //           }}
// //         >
// //           <Typography
// //             variant="h6"
// //             align="center"
// //             sx={{ color: '#fff', mb: 2, fontWeight: 600 }}
// //           >
// //             Register
// //           </Typography>
// //           <AuthForm isMobile={isMobile} isTablet={isTablet} />
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // }



// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { Box, Typography, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
// import { motion } from 'framer-motion';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/navigation';
// import { useAuth } from './hooks/useAuth';

// const AuthForm = dynamic(() => import('@/components/AuthForm/AuthForm'), {
//   loading: () => <CircularProgress color="secondary" />,
//   ssr: false
// });

// export default function AuthPage() {
//   const [hydrated, setHydrated] = useState(false);
//   const { isAuthenticated, isLoading: authLoading } = useAuth();
//   const router = useRouter();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   useEffect(() => {
//     setHydrated(true);
//   }, []);

//   useEffect(() => {
//     if (isAuthenticated && !authLoading) {
//       router.push('/dashboard');
//     }
//   }, [isAuthenticated, authLoading, router]);

//   if (!hydrated || authLoading) {
//     return (
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)'
//       }}>
//         <CircularProgress color="secondary" size={60} />
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row',
//         background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)',
//         fontFamily: '"Poppins", Arial, sans-serif',
//         overflow: 'hidden',
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
//           zIndex: 0
//         }
//       }}
//     >
//       {/* Fondo hexagonal desenfocado */}
//       <Image
//         src="/images/fondo.png"
//         alt="hex bg"
//         fill
//         style={{ objectFit: 'cover', opacity: 0.99, zIndex: 0 }}
//       />

//       {/* Separador central con forma */}
//       {!isMobile && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             bottom: 0,
//             left: '50%',
//             width: 40,
//             backgroundColor: 'rgba(255, 50, 50, 0)',
//             clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)',
//             zIndex: 3,
//             boxShadow: '0 0 20px rgba(0,0,0,0.3)'
//           }}
//         />
//       )}

//       {/* Sección de Branding */}
//       <Box
//         sx={{
//           flex: isMobile ? '0 0 auto' : 1,
//           bgcolor: 'rgba(255, 50, 50, 1)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: isMobile ? 'center' : 'center',
//           p: isMobile ? 2 : 4,
//           color: '#fff',
//           clipPath: isMobile ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
//           textAlign: 'center',
//           height: isMobile ? 'auto' : '100vh',
//           minHeight: isMobile ? '30vh' : 'auto',
//           position: 'relative',
//           zIndex: 1,
//           backdropFilter: 'blur(2px)'
//         }}
//         component={motion.div}
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Box
//           sx={{
//             width: isMobile ? 80 : isTablet ? 120 : 150,
//             height: isMobile ? 80 : isTablet ? 120 : 150,
//             mb: isMobile ? 1 : 3,
//             position: 'relative'
//           }}
//         >
//           <Image
//             src="/images/flama.png"
//             alt="LlakaScript Logo"
//             width={200}
//             height={200}
//             priority
//             style={{
//               objectFit: 'contain',
//               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
//             }}
//           />
//         </Box>

//         <Typography
//           variant="h1"
//           sx={{
//             fontSize: isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem',
//             fontWeight: 700,
//             mb: 1,
//             textShadow: '0 2px 4px rgba(0,0,0,0.3)',
//             letterSpacing: '1px',
//             lineHeight: 1.2
//           }}
//         >
//           Firefighter
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontSize: isMobile ? '0.8rem' : '1rem',
//             px: isMobile ? 1 : 2,
//             opacity: 0.9,
//             maxWidth: '90%',
//             lineHeight: 1.4,
//             mb: isMobile ? 2 : 0
//           }}
//         >
//           En cada llamada, un acto de entrega
//         </Typography>
//       </Box>

//       {/* Sección de Autenticación */}
//       <Box
//         sx={{
//           flex: isMobile ? '1 1 auto' : 1,
//           p: isMobile ? 2 : 4,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: isMobile ? 'flex-start' : 'center',
//           alignItems: 'center',
//           minHeight: isMobile ? 'auto' : '100vh',
//           height: isMobile ? 'auto' : '100vh',
//           position: 'relative',
//           zIndex: 1,
//           overflowY: 'auto',
//           pb: isMobile ? 4 : 0,
//           clipPath: isMobile ? 'none' : 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)',
//         }}
//         component={motion.div}
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Box
//           sx={{
//             background: 'rgba(255, 255, 255, 0.2)',
//             backdropFilter: 'blur(10px)',
//             borderRadius: '20px',
//             p: 4,
//             boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//             width: '100%',
//             maxWidth: 400,
//             border: '2px solid rgba(255,255,255,0.3)'
//           }}
//         >
//           <Typography
//             variant="h6"
//             align="center"
//             sx={{ 
//               color: '#fff', 
//               mb: 3, 
//               fontWeight: 600,
//               fontSize: isMobile ? '1.2rem' : '1.5rem',
//               textShadow: '0 1px 3px rgba(0,0,0,0.3)'
//             }}
//           >
//             {isMobile ? 'Acceso' : 'Bienvenido al Sistema'}
//           </Typography>
//           <AuthForm isMobile={isMobile} isTablet={isTablet} />
//         </Box>
//       </Box>
//     </Box>
//   );
// }



'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Typography, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useAuth } from './hooks/useAuth';

const AuthForm = dynamic(() => import('@/components/AuthForm/AuthForm'), {
  loading: () => <CircularProgress color="secondary" />,
  ssr: false
});

export default function AuthPage() {
  const [hydrated, setHydrated] = useState(false);
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated && !authLoading) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, authLoading, router]);

  if (!hydrated || authLoading) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)'
      }}>
        <CircularProgress color="secondary" size={60} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        background: 'linear-gradient(135deg, #ff0000 0%, #ff5e5e 50%, #ffffff 100%)',
        fontFamily: '"Poppins", Arial, sans-serif',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Fondo con efecto de ondas */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 30%),
            repeating-linear-gradient(
              45deg,
              rgba(255,255,255,0.05) 0px,
              rgba(255,255,255,0.05) 2px,
              transparent 2px,
              transparent 4px
            )
          `,
          transform: 'translate(-50%, -50%)',
          animation: 'rotate 60s linear infinite',
          '@keyframes rotate': {
            '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
            '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' }
          }
        }
      }} />
      <Image
        src="/images/fondo.png"
        alt="hex bg"
        fill
        style={{ objectFit: 'cover', opacity: 0.99, zIndex: 0 }}
      />

  

      {/* Sección de Branding con efecto de papel transparente */}
      <Box
        sx={{
          flex: isMobile ? '0 0 auto' : 1,
          bgcolor: 'rgba(255, 40, 40, 0.85)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: isMobile ? 2 : 4,
          color: '#fff',
          clipPath: isMobile ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
          textAlign: 'center',
          height: isMobile ? 'auto' : '100vh',
          minHeight: isMobile ? '30vh' : 'auto',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(3px)',
          borderRight: isMobile ? 'none' : '1px solid rgba(255,255,255,0.2)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M49,-51.3C62.4,-38.3,70.5,-19.2,70.4,-0.1C70.3,19,62,38.1,48.6,51.1C35.2,64.1,16.6,71.1,-2.5,73.6C-21.6,76.1,-43.2,74.1,-56.6,61.1C-70,48.2,-75.2,24.1,-74.1,1C-73,-22.2,-65.6,-44.4,-52.2,-57.4C-38.8,-70.4,-19.4,-74.2,0.8,-75C21,-75.8,42,-73.6,49,-51.3Z' /%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            opacity: 0.6,
            animation: 'wave 15s linear infinite',
            '@keyframes wave': {
              '0%': { transform: 'translate(0, 0) rotate(0deg)' },
              '50%': { transform: 'translate(50px, 30px) rotate(5deg)' },
              '100%': { transform: 'translate(0, 0) rotate(0deg)' }
            }
          }
        }}
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contenedor del logo con efecto de llama */}
        <Box
          sx={{
            width: isMobile ? 100 : isTablet ? 140 : 180,
            height: isMobile ? 100 : isTablet ? 140 : 180,
            mb: isMobile ? 1 : 3,
            position: 'relative',
            zIndex: 2,
            filter: 'drop-shadow(0 5px 10px rgba(255,100,100,0.7))',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              width: '80%',
              height: 20,
              background: 'radial-gradient(ellipse at center, rgba(255,200,100,0.8) 0%, transparent 70%)',
              transform: 'translateX(-50%)',
              filter: 'blur(5px)',
              zIndex: -1
            }
          }}
        >
          <Image
            src="/images/flama.png"
            alt="Firefighter Logo"
            width={400}
            height={400}
            priority
            style={{
              objectFit: 'contain',
              filter: 'brightness(1.1) contrast(1.2)'
            }}
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: isMobile ? '1.8rem' : isTablet ? '2.4rem' : '3rem',
            fontWeight: 900,
            mb: 1,
            textShadow: '0 3px 6px rgba(0,0,0,0.3), 0 0 20px rgba(255,100,100,0.7)',
            letterSpacing: '2px',
            lineHeight: 1.1,
            position: 'relative',
            zIndex: 2,
            fontStyle: 'italic',
            background: 'linear-gradient(to bottom, #fff, #ffe0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
         GAMES <br/>
        LLAKASCRIPT 
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? '0.9rem' : '1.1rem',
            px: isMobile ? 1 : 2,
            opacity: 0.9,
            maxWidth: '90%',
            lineHeight: 1.4,
            mb: isMobile ? 2 : 0,
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            position: 'relative',
            zIndex: 2,
            fontStyle: 'italic'
          }}
        >
          Juegos para integración social
        </Typography>
      </Box>

      {/* Sección de Autenticación con efecto vidrio */}
      <Box
        sx={{
          flex: isMobile ? '1 1 auto' : 1,
          p: isMobile ? 2 : 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isMobile ? 'flex-start' : 'center',
          alignItems: 'center',
          minHeight: isMobile ? 'auto' : '100vh',
          height: isMobile ? 'auto' : '100vh',
          position: 'relative',
          zIndex: 1,
          overflowY: 'auto',
          pb: isMobile ? 4 : 0,
          clipPath: isMobile ? 'none' : 'polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)',
        }}
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            p: 4,
            boxShadow: '0 8px 32px rgba(255, 50, 50, 0.3)',
            width: '100%',
            maxWidth: 400,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: `
                radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%),
                repeating-linear-gradient(
                  -45deg,
                  rgba(255,255,255,0.05) 0px,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px,
                  transparent 3px
                )
              `,
              animation: 'rotate 30s linear infinite',
              zIndex: -1
            }
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: '#fff',
              mb: 3,
              fontWeight: 700,
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}
          >
            {isMobile ? 'ACCESO' : 'BIENVENIDO'}
          </Typography>
          <AuthForm isMobile={isMobile} isTablet={isTablet} />
        </Box>
      </Box>
    </Box>
  );
}