// app/page.tsx
"use client";

import React from 'react';
import UpdateButton from '@/components/UpdateButton';
import { fetchUserData } from '@/apis/userApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setUserData } from '@/store/userSlice';
import Typography from '@mui/material/Typography';
import ProtectedRoute from '@/components/ProtectedRoute';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userData = useAppSelector((state) => state.user.userData);

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetchUserData();
      dispatch(setUserData(data));
    };

    getData();
  }, [dispatch]);

  return (
    <ProtectedRoute>
      <div>
        <Typography variant="h4">User Data</Typography>
        {user && (
          <Typography variant="body1">Email: {user.email}</Typography>
        )}
        {userData && (
          <Typography variant="body1">User Data: {JSON.stringify(userData)}</Typography>
        )}
        <UpdateButton />
      </div>
    </ProtectedRoute>
  );
};

export default HomePage;
