// import Image from 'next/image'
// import styles from './page.module.css'

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }




'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
// import AuthForm from '@/components/AuthForm/AuthForm';

const AuthForm = dynamic(
  () => import('@/components/AuthForm/AuthForm'),
  { 
    loading: () => <CircularProgress color="secondary" />,
    ssr: false // Opcional: desactiva SSR si no es necesario
  }
);


export default function AuthPage() {
  const [hydrated, setHydrated] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        background: 'linear-gradient(135deg, #ff3d3d 0%, #ff8a8a 50%, #ffffff 100%)',
        fontFamily: '"Poppins", Arial, sans-serif',
        overflow: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
          zIndex: 0
        }
      }}
    >
      {/* Sección de Branding */}
      <Box
        sx={{
          flex: isMobile ? '0 0 auto' : 1,
          bgcolor: 'rgba(255, 50, 50, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'center',
          p: isMobile ? 2 : 4,
          color: '#fff',
          clipPath: isMobile ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
          textAlign: 'center',
          height: isMobile ? 'auto' : '100vh',
          minHeight: isMobile ? '30vh' : 'auto',
          position: 'relative',
          zIndex: 1,
          backdropFilter: 'blur(2px)'
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            width: isMobile ? 80 : isTablet ? 120 : 150,
            height: isMobile ? 80 : isTablet ? 120 : 150,
            mb: isMobile ? 1 : 3,
            position: 'relative'
          }}
        >
          <Image
            src="/images/flama.png"
            alt="LlakaScript Logo"
            width={200}
            height={200}
            priority
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
            }}
          />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: isMobile ? '1.2rem' : isTablet ? '1.8rem' : '2.2rem',
            fontWeight: 700,
            mb: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '1px',
            lineHeight: 1.2
          }}
        >
          LlakaScript
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: isMobile ? '0.7rem' : '0.9rem',
            px: isMobile ? 1 : 2,
            opacity: 0.9,
            maxWidth: '90%',
            lineHeight: 1.4,
            mb: isMobile ? 2 : 0
          }}
        >
          Plataforma de juegos interactivos
        </Typography>
      </Box>

      {/* Sección de Autenticación */}
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
          pb: isMobile ? 4 : 0
        }}
      >
        {/* Navbar solo en desktop */}
        {!isMobile && (
          <Stack
            direction="row"
            spacing={4}
            sx={{
              position: 'absolute',
              top: 20,
              right: 40,
              '& > *': {
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }
              }
            }}
          >
            {['Inicio', 'Nosotros', 'Contacto'].map((item) => (
              <Typography
                key={item}
                variant="button"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        )}

        {/* Componente del Formulario */}
        <AuthForm isMobile={isMobile} isTablet={isTablet} />
        
      </Box>
    </Box>
  );
}