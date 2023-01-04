import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
//import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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

export default function ExportAdvice() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Paper elevation={5} style={{backgroundColor:'#d9d9d9',background:'transparent', width:'600px', height:'550px', marginLeft:'600px'}}>
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
          <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
            <AssignmentIndIcon />
          </Avatar>
          <Typography component="h1" variant="h6" style={{fontWeight:'bold'}}>
            WING SERVICES:Exports Advice wing
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

          <p style={{ fontWeight: 'bold', color:'red' }}>Services :</p>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Export Consultation"
          labelPlacement="end"
        />
              </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Export Training"
          labelPlacement="end"
        />
              </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Other Services"
          labelPlacement="end"
        />
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
              Schedule an Appointment
            </Button>
            {/* <p style={{ fontWeight: 'bold', color:'red' }}>Note: (Orignals would be required to issue recommendation)</p> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </Paper>
  );
}