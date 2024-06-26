"use client";
import React from 'react';
import { Button } from '@mui/material';
import { useAppDispatch } from '../store/hooks';
import { updateUserData } from '../apis/userApi';
import setUserData from '../store/userSlice';

const UpdateButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleUpdate = async () => {
    try {
      const data = await updateUserData({ name: 'New Name' });
      dispatch(setUserData(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleUpdate}>
      Update User Data
    </Button>
  );
};

export default UpdateButton;
