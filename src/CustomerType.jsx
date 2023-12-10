import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";

function CustomerType() {
  const [showSearch, setShowSearch] = useState(false);

  const handleButtonClick = () => {
    setShowSearch(true);
  };

  const handleSearchSubmit = () => {
    // Handle search submit action
    console.log('Search submitted');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100vh',
      textAlign: 'center'
    }}>
      <img src="/logo 4.png" alt="Logo" />

      <Typography variant="h5">
        Welcome Arya Soni
      </Typography>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Developer
        </Button>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Organization
        </Button>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Company
        </Button>
      </div>
      {showSearch && (
        <Box style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '20px'
        }}>
          <TextField variant="outlined" placeholder="Search" />
          <Button variant="contained" color="primary" onClick={handleSearchSubmit} style={{ marginTop: '10px' }}>
            Submit
          </Button>
        </Box>
      )}
    </div>
  );
};
export default CustomerType;
