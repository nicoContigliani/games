// 'use client';

// import React from 'react';
// import {
//   Box,
//   Typography,
//   Stack,
//   Button,
//   Divider,
//   InputAdornment,
//   IconButton
// } from '@mui/material';
// import CasinoIcon from '@mui/icons-material/Casino';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LockIcon from '@mui/icons-material/Lock';

// import DynamicForm, { FormConfig } from '../DynamicForm/DynamicForm';




// interface AuthFormProps {
//   isMobile: boolean;
//   isTablet: boolean;
// }

// export default function AuthForm({ isMobile, isTablet }: AuthFormProps) {
//   const [showPassword, setShowPassword] = React.useState(false);

//   const formConfig: FormConfig = {
//     tabs: [
//       {
//         label: 'Iniciar Sesión',
//         fields: [
//           {
//             name: 'email',
//             placeholder: 'Correo electrónico',
//             type: 'email',
//             required: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             }
//           },
//           {
//             name: 'password',
//             placeholder: 'Contraseña',
//             type: 'password',
//             required: true,
//             showPasswordToggle: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             }
//           }
//         ]
//       },
//       {
//         label: 'Registrarse',
//         fields: [
//           {
//             name: 'name',
//             placeholder: 'Nombre completo',
//             required: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <PersonIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             }
//           },
//           {
//             name: 'email',
//             placeholder: 'Correo electrónico',
//             type: 'email',
//             required: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <EmailIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             }
//           },
//           {
//             name: 'password',
//             placeholder: 'Contraseña',
//             type: 'password',
//             required: true,
//             showPasswordToggle: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             }
//           },
//           {
//             name: 'confirmPassword',
//             placeholder: 'Confirmar contraseña',
//             type: 'password',
//             required: true,
//             InputProps: {
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
//                 </InputAdornment>
//               )
//             },
//             validation: {
//               validate: (value: string, formValues: any) => 
//                 value === formValues.password || 'Las contraseñas no coinciden'
//             }
//           }
//         ]
//       }
//     ],
//     isMobile,
//     isTablet,
//     submitButtonText: (currentTab) => currentTab === 0 ? 'Iniciar Sesión' : 'Registrarse',
//     onSubmit: (data) => {
//       console.log('Form submitted:', data);
//       // Aquí iría tu lógica de autenticación
//     },
//     header: {
//       title: (currentTab) => currentTab === 0 ? 'Bienvenido' : 'Crea tu cuenta',
//       subtitle: (currentTab) => currentTab === 0 ? 'Ingresa tus credenciales' : 'Completa el formulario',
//       icon: (
//         <CasinoIcon 
//           sx={{ 
//             fontSize: isMobile ? 40 : 50, 
//             color: 'error.main',
//             mb: 1,
//             filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
//           }} 
//         />
//       ),
//       sx: {
//         title: {
//           fontWeight: 700,
//           color: 'error.dark',
//           mb: 0.5,
//           fontSize: isMobile ? '1.1rem' : '1.5rem'
//         },
//         subtitle: {
//           color: 'text.secondary',
//           mb: 2,
//           fontSize: isMobile ? '0.75rem' : '0.875rem'
//         }
//       }
//     },
//     footer: (
//       <>
//         <Divider sx={{ my: isMobile ? 1 : 2 }}>
//           <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//             o
//           </Typography>
//         </Divider>

//         <Button
//           variant="outlined"
//           fullWidth
//           size={isMobile ? 'medium' : 'large'}
//           sx={{
//             borderColor: 'divider',
//             color: 'text.primary',
//             borderRadius: 2,
//             fontWeight: 500,
//             py: isMobile ? 1 : 1.5,
//             fontSize: isMobile ? '0.875rem' : '1rem',
//             '&:hover': {
//               borderColor: 'text.primary',
//               backgroundColor: 'rgba(0, 0, 0, 0.02)'
//             }
//           }}
//         >
//           Continuar con Google
//         </Button>
//       </>
//     ),
//     sx: {
//       form: {
//         width: '100%',
//         maxWidth: 450,
//         mx: 'auto',
//         mt: isMobile ? 2 : 0,
//         mb: isMobile ? 2 : 0
//       },
//       paper: {
//         px: isMobile ? 2 : 4,
//         py: isMobile ? 2 : 4,
//         borderRadius: 3,
//         background: 'rgba(255, 255, 255, 0.97)',
//         backdropFilter: 'blur(8px)',
//         border: '1px solid rgba(255, 255, 255, 0.2)',
//         boxShadow: isMobile 
//           ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
//           : '0 8px 32px rgba(0, 0, 0, 0.1)',
//         overflow: 'hidden'
//       }
//     },
//     animation: {
//       type: 'fade',
//       duration: 0.3
//     }
//   };

//   return (
//     <DynamicForm {...formConfig} />
//   );
// }



'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState, AppDispatch } from '@/store';
import { login, register } from '@/store/slices/authSlice';
import DynamicForm, { FormConfig } from '../DynamicForm/DynamicForm';

interface AuthFormProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function AuthForm({ isMobile, isTablet }: AuthFormProps) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleAuthSubmit = async (data: any) => {
    if (currentTab === 0) {
      // Login
      const result = await dispatch(login({
        email: data.email,
        password: data.password
      }));
      
      if (login.fulfilled.match(result)) {
        router.push('/games');
      }
    } else {
      // Register
      const result = await dispatch(register({
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: ''
      }));
      
      if (register.fulfilled.match(result)) {
        router.push('/dashboard');
      }
    }
  };

  const formConfig: FormConfig = {
    tabs: [
      {
        label: 'Iniciar Sesión',
        fields: [
          {
            name: 'email',
            placeholder: 'Correo electrónico',
            type: 'email',
            required: true,
            validation: {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo electrónico inválido'
              }
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            }
          },
          {
            name: 'password',
            placeholder: 'Contraseña',
            type: 'password',
            required: true,
            showPasswordToggle: true,
            validation: {
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres'
              }
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            }
          }
        ]
      },
      {
        label: 'Registrarse',
        fields: [
          {
            name: 'name',
            placeholder: 'Nombre completo',
            required: true,
            validation: {
              minLength: {
                value: 3,
                message: 'El nombre debe tener al menos 3 caracteres'
              }
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            }
          },
          {
            name: 'email',
            placeholder: 'Correo electrónico',
            type: 'email',
            required: true,
            validation: {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Correo electrónico inválido'
              }
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            }
          },
          {
            name: 'password',
            placeholder: 'Contraseña',
            type: 'password',
            required: true,
            showPasswordToggle: true,
            validation: {
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres'
              }
            },
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            }
          },
          {
            name: 'confirmPassword',
            placeholder: 'Confirmar contraseña',
            type: 'password',
            required: true,
            InputProps: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon fontSize={isMobile ? 'small' : 'medium'} color="action" />
                </InputAdornment>
              )
            },
            validation: {
              validate: (value: string, formValues: any) => 
                value === formValues.password || 'Las contraseñas no coinciden'
            }
          }
        ]
      }
    ],
    isMobile,
    isTablet,
    submitButtonText: (
      <Box>
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          currentTab === 0 ? 'Iniciar Sesión' : 'Registrarse'
        )}
      </Box>
    ),
    onSubmit: handleAuthSubmit,
    onTabChange: (newTab) => setCurrentTab(newTab),
    header: {
      title: (currentTab) => currentTab === 0 ? 'Bienvenido' : 'Crea tu cuenta',
      subtitle: (currentTab) => currentTab === 0 ? 'Ingresa tus credenciales' : 'Completa el formulario',
      icon: (
        <CasinoIcon 
          sx={{ 
            fontSize: isMobile ? 40 : 50, 
            color: 'error.main',
            mb: 1,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
          }} 
        />
      ),
      sx: {
        title: {
          fontWeight: 700,
          color: 'error.dark',
          mb: 0.5,
          fontSize: isMobile ? '1.1rem' : '1.5rem'
        },
        subtitle: {
          color: 'text.secondary',
          mb: 2,
          fontSize: isMobile ? '0.75rem' : '0.875rem'
        }
      }
    },
    footer: (
      <>
        {error && (
          <Typography 
            color="error" 
            sx={{ 
              textAlign: 'center', 
              mb: 2,
              fontSize: isMobile ? '0.75rem' : '0.875rem'
            }}
          >
            {typeof error === 'string' ? error : 'Ocurrió un error. Por favor intenta nuevamente.'}
          </Typography>
        )}
        <Divider sx={{ my: isMobile ? 1 : 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            o
          </Typography>
        </Divider>
        <Button
          variant="outlined"
          fullWidth
          size={isMobile ? 'medium' : 'large'}
          sx={{
            borderColor: 'divider',
            color: 'text.primary',
            borderRadius: 2,
            fontWeight: 500,
            py: isMobile ? 1 : 1.5,
            fontSize: isMobile ? '0.875rem' : '1rem',
            '&:hover': {
              borderColor: 'text.primary',
              backgroundColor: 'rgba(0, 0, 0, 0.02)'
            }
          }}
        >
          Continuar con Google
        </Button>
      </>
    ),
    sx: {
      form: {
        width: '100%',
        maxWidth: 450,
        mx: 'auto',
        mt: isMobile ? 2 : 0,
        mb: isMobile ? 2 : 0
      },
      paper: {
        px: isMobile ? 2 : 4,
        py: isMobile ? 2 : 4,
        borderRadius: 3,
        background: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isMobile 
          ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }
    },
    animation: {
      type: 'fade',
      duration: 0.3
    }
  };

  return <DynamicForm {...formConfig} />;
}