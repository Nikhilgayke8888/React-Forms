import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './KYC.css';




const theme = createTheme();

export default function KYC() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  return (

    <ThemeProvider theme={theme} >
      <Paper elevation={7} style={{ backgroundColor: '#FEFCFF', width: '700px', height: '750px', marginLeft: '600px' }}>
        <Container component="main">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <DocumentScannerIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              KYC DETAILS
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

              <p style={{ fontWeight: 'bold', fontFamily: 'Georgia' }}>IDENTITY DETAILS</p>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Date"
                    name="lastName"
                    autoComplete="Date"
                  />
                </Grid>
              </Grid><br></br>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Name of Applicant"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Father's Name"
                    autoFocus
                  />
                </Grid>
              </Grid><br></br>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Date of Birth"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nationality"
                    autoFocus
                  />
                </Grid>
              </Grid><br></br>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Adhaar No,if any"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="PAN"
                    autoFocus
                  />
                </Grid>
              </Grid><br></br>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                    <InputLabel id="demo-select-small">Gender</InputLabel>
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
                      <MenuItem >Male</MenuItem>
                      <MenuItem >Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                    <InputLabel id="demo-select-small">Maritial Status</InputLabel>
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
                      <MenuItem >Single</MenuItem>
                      <MenuItem >Married</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <p style={{ fontWeight: 'bold', fontFamily: 'Georgia' }}>ADDRESS DETAILS :</p>

              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Residence Address :"
                    autoFocus
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"

                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'green' }}
              >
                Save
              </Button>

              <Button
                type="submit"

                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'red' }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>

  );
}
