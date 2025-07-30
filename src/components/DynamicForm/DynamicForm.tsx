'use client';

import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  Tabs,
  Tab,
  Paper,
  Divider,
  InputAdornment,
  IconButton,
  SxProps,
  Theme
} from '@mui/material';
import { useForm, SubmitHandler, FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export type FormField = {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  defaultValue?: any;
  required?: boolean;
  validation?: any;
  hidden?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  InputProps?: any;
  sx?: SxProps<Theme>;
  component?: React.ElementType;
  options?: any[];
  dependencies?: string[];
  render?: (methods: UseFormReturn<FieldValues, any>, index: number) => React.ReactNode;
  showPasswordToggle?: boolean;
};

export type FormTab = {
  label: string;
  fields: FormField[];
};

export type FormConfig = {
  tabs?: FormTab[];
  fields?: FormField[];
  defaultTab?: number;
  isMobile?: boolean;
  isTablet?: boolean;
  submitButtonText?: string | ((currentTab: number) => string);
  resetButtonText?: string;
  showResetButton?: boolean;
  onSubmit: SubmitHandler<any>;
  onTabChange?: (newTab: number) => void;
  header?: {
    title?: string | ((currentTab: number) => string);
    subtitle?: string | ((currentTab: number) => string);
    icon?: React.ReactNode;
    sx?: SxProps<Theme>;
  };
  footer?: React.ReactNode;
  sx?: {
    form?: SxProps<Theme>;
    paper?: SxProps<Theme>;
    header?: SxProps<Theme>;
    footer?: SxProps<Theme>;
  };
  containerProps?: any;
  paperProps?: any;
  animation?: {
    type?: 'fade' | 'slide' | 'none';
    duration?: number;
  };
};

const DynamicForm: React.FC<FormConfig> = ({
  tabs,
  fields,
  defaultTab = 0,
  isMobile = false,
  isTablet = false,
  submitButtonText = 'Submit',
  resetButtonText = 'Reset',
  showResetButton = false,
  onSubmit,
  onTabChange,
  header,
  footer,
  sx = {},
  containerProps = {},
  paperProps = {},
  animation = { type: 'fade', duration: 0.3 }
}) => {
  const [currentTab, setCurrentTab] = React.useState(defaultTab);
  const [showPassword, setShowPassword] = React.useState(false);
  const methods = useForm();
  const { handleSubmit, reset, formState: { errors } } = methods;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    if (onTabChange) onTabChange(newValue);
  };

  const handleReset = () => {
    reset();
  };

  const renderField = (field: FormField, index: number) => {
    if (field.hidden) return null;

    if (field.render) {
      return field.render(methods, index);
    }

    const registeredProps = methods.register(field.name, {
      required: field.required ? `${field.label || field.name} es requerido` : false,
      ...field.validation
    });

    const inputProps = {
      ...field.InputProps,
      ...(field.showPasswordToggle && field.type === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              size={isMobile ? 'small' : 'medium'}
            >
              {showPassword ?
                <VisibilityOff fontSize={isMobile ? 'small' : 'medium'} /> :
                <Visibility fontSize={isMobile ? 'small' : 'medium'} />
              }
            </IconButton>
          </InputAdornment>
        )
      } : {})
    };

    const commonProps = {
      label: field.label,
      placeholder: field.placeholder,
      type: field.type === 'password' && showPassword ? 'text' : field.type,
      defaultValue: field.defaultValue,
      disabled: field.disabled,
      autoFocus: field.autoFocus,
      fullWidth: true,
      size: (isMobile ? 'small' : 'medium') as 'small' | 'medium',
      InputProps: inputProps,
      sx: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)'
        },
        ...field.sx
      } as SxProps<Theme>,
      error: !!errors[field.name],
      helperText: errors[field.name]?.message as string | undefined,
      ...registeredProps
    };

    if (field.component) {
      const CustomComponent = field.component;
      return <CustomComponent key={field.name} {...commonProps} />;
    }

    return <TextField key={field.name} {...commonProps} variant="outlined" />;
  };

  const formFields = tabs ? tabs[currentTab].fields : fields || [];
  const submitText = typeof submitButtonText === 'function'
    ? submitButtonText(currentTab)
    : submitButtonText;

  const headerTitle = typeof header?.title === 'function'
    ? header.title(currentTab)
    : header?.title;

  const headerSubtitle = typeof header?.subtitle === 'function'
    ? header.subtitle(currentTab)
    : header?.subtitle;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 450,
        mx: 'auto',
        mt: isMobile ? 2 : 0,
        mb: isMobile ? 2 : 0,
        ...sx.form
      } as SxProps<Theme>}
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      {...containerProps}
    >
      <Paper
        elevation={isMobile ? 4 : 10}
        sx={{
          px: isMobile ? 2 : 4,
          py: isMobile ? 2 : 4,
          borderRadius: 3,
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isMobile
            ? '0 4px 12px rgba(0, 0, 0, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          ...sx.paper
        } as SxProps<Theme>}
        {...paperProps}
      >
        {header && (
          <Box sx={{
            textAlign: 'center' as const,
            mb: isMobile ? 1 : 3,
            ...header.sx,
            ...sx.header
          } as SxProps<Theme>}>
            {header.icon && (
              <Box sx={{ mb: 1 }}>
                {header.icon}
              </Box>
            )}
            {headerTitle && (
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'error.dark',
                  mb: 0.5,
                  fontSize: isMobile ? '1.1rem' : '1.5rem',
                  ...(header.sx as any)?.title
                }}
              >
                {headerTitle}
              </Typography>
            )}
            {headerSubtitle && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  mb: 2,
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  ...(header.sx as any)?.subtitle
                }}
              >
                {headerSubtitle}
              </Typography>
            )}
          </Box>
        )}

        {tabs && (
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            centered
            variant="fullWidth"
            sx={{
              mb: isMobile ? 2 : 3,
              '& .MuiTabs-indicator': {
                height: 3,
                backgroundColor: 'error.main'
              },
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: isMobile ? '0.75rem' : '0.9rem',
                color: 'text.secondary',
                textTransform: 'capitalize',
                minHeight: 48,
                px: isMobile ? 1 : 2,
                '&.Mui-selected': {
                  color: 'error.main'
                }
              }
            } as SxProps<Theme>}
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        )}

        <FormProvider {...methods}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={isMobile ? 2 : 2.5}>
              <AnimatePresence mode="wait">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, height: field.hidden ? 0 : 'auto' }}
                    animate={{ opacity: 1, height: field.hidden ? 0 : 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: animation.duration || 0.3 }}
                  >
                    {renderField(field, index)}
                  </motion.div>
                ))}
              </AnimatePresence>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size={isMobile ? 'medium' : 'large'}
                sx={{
                  bgcolor: 'error.main',
                  color: '#fff',
                  borderRadius: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  py: isMobile ? 1 : 1.5,
                  mt: 1,
                  boxShadow: '0 2px 8px rgba(255, 50, 50, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'error.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(255, 50, 50, 0.4)'
                  }
                } as SxProps<Theme>}
              >
                {submitText}
              </Button>

              {footer}
            </Stack>
          </Box>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default DynamicForm;