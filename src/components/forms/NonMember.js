import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons//LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {''}
      <Link color="inherit" href="https://mui.com/">
       
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function NonMember() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Paper elevation={5} style={{backgroundColor:'#d9d9d9',background:'transparent', width:'600px', height:'600px', marginLeft:'600px'}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
           width:'100%'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Non Member Enrollment Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

          <p style={{ fontWeight: 'bold' }}>UPLOAD DOCUMENT :</p><br></br>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <input
                                    accept=".png, .jpg"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    label="Upload File"
                                    name="file"
                                    type="file" />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span">
                                        Copy of PAN CARD
                                    </Button>
                                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
              <input
                                    accept=".png, .jpg"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    label="Upload File"
                                    name="file"
                                    type="file" />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span">
                                    Copy of IEC CERT.
                                    </Button>
                                </label>
              </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <input
                                    accept=".png, .jpg"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    label="Upload File"
                                    name="file"
                                    type="file" />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span">
                                    Copy of ROC copy
                                    </Button>
                                </label>
              </Grid>
              <Grid item xs={12} sm={6}>
              <input
                                    accept=".png, .jpg"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    label="Upload File"
                                    name="file"
                                    type="file" />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span">
                                        GST Registration
                                    </Button>
                                </label>
              </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <input
                                    accept=".png, .jpg"
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    label="Upload File"
                                    name="file"
                                    type="file" />
                                <label htmlFor="raised-button-file">
                                    <Button variant="outlined" component="span">
                                        Indemnity BOND 
                                    </Button>
                                </label>
              </Grid>
              </Grid>
              <br></br>

              
            <Button
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:'blue' }}
            >
              Make Payment
            </Button>

            <Button
              type="submit"
            
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:'green'}}
            >
              Save
            </Button>
            <p style={{ fontWeight: 'bold', color:'red' }}>Note: (Orignals would be required to issue recommendation)</p>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </Paper>
  );
}