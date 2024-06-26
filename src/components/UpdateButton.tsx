// UpdateButton.tsx
"use client";

import React from 'react';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const UpdateButton: React.FC = () => {
  const router = useRouter();

  const handleUpdate = async () => {
    if (localStorage.getItem('token')) {
      const url = 'http://localhost:5001/ebuddy-11b3e/us-central1/api/api/update-user';
      const data = {
        userId: 1,
        username: 'tester' // Replace with your data
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Handle success, e.g., show a success message
          console.log('Data updated successfully');
          router.push('/'); // Redirect to home or another page
        } else {
          // Handle error
          console.error('Failed to update data:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      console.error('User not authenticated');
    }
  };

  return (
    <div>
      <Button onClick={handleUpdate} variant="contained" color="primary">
        Update Data
      </Button>
      <Typography variant="body1">Click the button to update your data</Typography>
    </div>
  );
};

export default UpdateButton;
