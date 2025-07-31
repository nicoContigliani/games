// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, AppDispatch } from '@/store';
// import { loadUser } from '@/store/slices/authSlice';

// export const useAuth = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const { isAuthenticated, isLoading, token } = useSelector(
//     (state: RootState) => state.auth
//   );
//   const currentUser = useSelector((state: RootState) => state.user.currentUser);

//   useEffect(() => {
//     dispatch(loadUser());
//   }, [dispatch]);

//   return {
//     isAuthenticated,
//     isLoading,
//     token,
//     currentUser,
//   };
// };

'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { loadUser } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isAuthenticated, isLoading, token } = useSelector(
    (state: RootState) => state.auth
  );
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return {
    isAuthenticated,
    isLoading,
    token,
    currentUser,
  };
};