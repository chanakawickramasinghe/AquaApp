import { Helmet } from 'react-helmet-async';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Container, TextField, Typography} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Button from '@mui/material/Button';
import Logo from '../components/logo';
import useResponsive from '../hooks/useResponsive';
import { RegisterForm } from '../sections/auth/login';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  LiveMeterGraph,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------
function createData(  
  amount : String,
  status : String,
) 

{
  return { amount, status };
}
const rows = [
  createData('December, 2022', '1200.00 LKR'),
  createData('November, 2022', '1200.00 LKR'),
  createData('Octorber, 2022', '1200.00 LKR'),
  createData('Total', '3600.00 LKR'),
];

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));
const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export default function Payments() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Aqua App - Payment </title>
      </Helmet>


      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Payments
        </Typography>

        <Grid container spacing={3}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {/* <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList value={value} onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1"> */}
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Pending Payments</TableCell>
                            <TableCell> </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.month}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              
                              <TableCell><b>{row.amount}</b></TableCell>
                              <TableCell style={{color:'green'}}>{row.status}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { mb: 3, ml: 2  ,width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            required
                            id="outlined-required"
                            label="Amount"
                            defaultValue="Enter your amount here"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Card Number"
                            defaultValue="Enter your card number here"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Expiry Date"
                            defaultValue="Enter expiry date here"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="CCV"
                            defaultValue="Enter CCV here"
                          />                          
                        </div>
                        <Box sx={{ typography: 'body1', fontWeight: 'bold', mb: 3, ml: 2}} display="flex"
                            justifyContent="flex-end"
                            alignItems="flex-end">
                          <Stack direction="row" spacing={2}>
                            <Button variant="contained" color="primary">Make Payment</Button>
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>
                </Grid>                   
              </Box>    
              {/* </TabPanel>
              <TabPanel value="2"> */}
                {/* <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Device Type</TableCell>
                              <TableCell>Device Name</TableCell>
                              <TableCell> </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.month}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                
                                <TableCell style={{color:'green'}}>{row.status}</TableCell>
                                <TableCell><b>{row.amount}</b></TableCell>
                                <TableCell>ICON</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      </Grid>
                      <Grid item xs={3}>
                        <Box sx={{ typography: 'body1', fontWeight: 'bold', mb: 3, ml: 2}}>
                            Master WF
                      </Box>
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { mb: 3, ml: 2  ,width: '20ch' },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            required
                            id="outlined-required"
                            label="Device Name"
                            defaultValue="Master WF"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Device Type"
                            defaultValue="Water Flow Sensor"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Device Position"
                            defaultValue="Master"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Device Status"
                            defaultValue="ON"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Connected Date"
                            defaultValue="2023.01.10"
                          />
                          <TextField
                            disabled
                            id="outlined-required"
                            label="Name"
                            defaultValue="Name"
                          />
                        </div>
                      </Box>
                      </Grid> 
                  </Grid>                   
                </Box>       */}
              {/* </TabPanel>
            </TabContext> */}
          </Box>
        </Grid>
      </Container>
    </>
  );
}
