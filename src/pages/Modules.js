import { Helmet } from 'react-helmet-async';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid, Container, TextField } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Button from '@mui/material/Button';
import { PieChart } from 'react-minimal-pie-chart';
import DonutChart from 'react-donut-chart';
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
  createData('Master WF', 'Master'),
  createData('Slave WF1', 'Slave'),
  createData('Slave WF2', 'Slave'),
  createData('Slave WF3', 'Slave'),
  createData('Slave WF4', 'Slave'),
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

export default function Modules() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Helmet>
        <title> Aqua App - Modules </title>
      </Helmet>


      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="Solenoid Module" value="1" />
                  <Tab label="Water Flow Module" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
              <Box sx={{ flexGrow: 1 }}>
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
                    <Grid item xs={5}>
                      <Box sx={{ typography: 'body1', fontWeight: 'bold', mb: 3, ml: 2}} display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end">
                      <Stack direction="row" spacing={2}>
                        <Button variant="outlined" color="warning">Deattached</Button>
                        <Button variant="contained" color="warning">Deactivate</Button>
                      </Stack>
                      </Box>
                      {/* <PieChart style={{color: 'white'}}
  data={[
    { title: 'One', value: 46, color: '#fffff1' },
    { title: 'Two', value: 54, color: '#C13C37' },
  ]}
/>; */}

<div 
style={{
  marginLeft: '40px'
  

}}

>

<DonutChart width="350" height="350" legend={false} colors={['#2065D1']}
  data={[
    {
      label: 'Battery Level',
      value: 25,

    },
    {
      label: '',
      value: 75,
      isEmpty: true,

    },
  ]}
/>;
</div>


                    </Grid> 
                </Grid>                   
              </Box>    
              </TabPanel>
              <TabPanel value="2">
                <Box sx={{ flexGrow: 1 }}>
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
                      <Grid item xs={5}>
                        <Box sx={{ typography: 'body1', fontWeight: 'bold', mb: 3, ml: 2}} display="flex"
                          justifyContent="flex-end"
                          alignItems="flex-end">
                        <Stack direction="row" spacing={2}>
                          <Button variant="outlined" color="warning">Deattached</Button>
                          <Button variant="contained" color="warning">Deactivate</Button>
                        </Stack>
                        </Box>
                          <LiveMeterGraph
                            title="Water Flow Rate"
                            subheader="(+43%) than last year"
                            chartData={[                
                              {
                                type: 'line',
                                fill: 'solid',
                                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                              },
                            ]}
                          />
                      </Grid> 
                      <div 
style={{
  marginLeft: '40px'
  

}}

>

<DonutChart width="350" height="350" legend={false} 
colors={['#2065D1']}
  data={[
    {
      label: 'Water Flow Rate',
      value: 27.9,

    },
    {
      label: '',
      value: 50,
      isEmpty: true,

    },
  ]}
/>;

<DonutChart width="350" height="350" legend={false} colors={['#2065D1']}
  data={[
    {
      label: 'Battery Level',
      value: 25,

    },
    {
      label: '',
      value: 75,
      isEmpty: true,

    },
  ]}
/>;

</div>
                  </Grid>                   
                </Box>      
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
