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
import LockOutlinedIcon from '@material-ui/icons//LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
//import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';


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

export default function ProfessionalWing() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Paper elevation={5} style={{backgroundColor:'#d9d9d9',background:'transparent', width:'600px', height:'450px', marginLeft:'600px'}}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6" style={{fontWeight:'bold'}}>
            WING SERVICES:Professional wing
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

         

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small">Service :</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        // value={age}
        label="Gender"
        // onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem >Buisness setup Consultation</MenuItem>
        <MenuItem >Buisness Setup Services</MenuItem>
        <MenuItem >Other Professional Services</MenuItem>
        
      </Select>
    </FormControl>
              </Grid>
              </Grid>
              <br></br>

              <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
              <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Specify the region-Summarize the issue"
                  autoFocus
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