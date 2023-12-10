import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";

function Hosting() {
  
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
        <Button variant="contained" color="primary" >
         Self Hosting 
        </Button>
        <Button variant="contained" color="primary" >
          Xero Codee Hosting 
        </Button>
        
      </div>
      </div>
      )
      }
      export default Hosting;