'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  InputAdornment,
  IconButton
} from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import DynamicForm, { FormConfig } from '../DynamicForm/DynamicForm';




interface AuthFormProps {
  isMobile: boolean;
  isTablet: boolean;
}

export default function AuthForm({ isMobile, isTablet }: AuthFormProps) {
  const [showPassword, setShowPassword] = React.useState(false);

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
    submitButtonText: (currentTab) => currentTab === 0 ? 'Iniciar Sesión' : 'Registrarse',
    onSubmit: (data) => {
      console.log('Form submitted:', data);
      // Aquí iría tu lógica de autenticación
    },
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

  return (
    <DynamicForm {...formConfig} />
  );
}