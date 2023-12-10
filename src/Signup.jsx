import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    height: '100vh',
  },
  leftPanel: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '50%',
  },
  rightPanel: {
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-between',

    backgroundColor: '#f0f0f0',
    position: 'relative',
    flexBasis: '50%',
  },
  logo: {
    marginBottom: '1rem',
    // Your logo styles here
  },
  helloMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: '0.5rem',
    },
  },
  orText: {
    margin: '1rem 0',
    textAlign: 'center',
  },
  googleBtn: {
    backgroundColor: '#1976D2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0D47A1',
    },
    margin: '10px'
  },
  githubBtn: {
    backgroundColor: '#1976D2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0D47A1',
    },
  },
  imageSection: {
    position: 'relative',
    height: '100%',
    '& > img': {
      width: '80%',
      height: '80%',
      top: '100px'
      
    },
  },
  designBottomRight: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    // Adjust these values to position your design image
    width: '100px', // Set your image width
    height: 'auto'
  },
};

const SignUpPage = () => {
  return (
    <Grid container style={styles.root}>
      <Grid item xs={6}>
        <div  style={styles.leftPanel}>
          <div style={styles.logo}>
            {/* Your logo image */}
            <img src="logo 4.png" alt="Your Logo" />
          </div>
          <div style={styles.helloMessage}>
            <Typography variant="h4">Hello!</Typography>
            <TextField label="First Name" variant="outlined" style={{margin:10}} />
            <TextField label="Last Name" variant="outlined" />
            <TextField label="Email" variant="outlined" type="email" style={{margin:10}}/>
            <TextField label="Password" variant="outlined" type="password" />
            <TextField label="Confirm Password" variant="outlined" type="password" style={{margin:10}}/>
            <Button variant='contained ' style={{margin: 10,backgroundColor: '#1976D2',color: '#fff' }} size="large">Sign up </Button>
            <Typography variant="body2" style={styles.orText}>
              Or
            </Typography>
            <Button variant="contained" style={styles.googleBtn}>
              Sign up with Google
            </Button>
            <Button variant="contained" style={styles.githubBtn}>
              Sign up with GitHub
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div style={styles.rightPanel}>
          <div style={styles.imageSection}>
            <img src="/bro.png" alt="Your Photo" />
            </div>
            <div style={styles.designBottomRight}>
              {/* Your design image */}
              <img src="/Vector.png" alt="Design" />
            </div>
         
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
