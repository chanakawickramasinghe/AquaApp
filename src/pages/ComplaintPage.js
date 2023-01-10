import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import close from '../components/img/close.png';

function createData(
  date : String,
  type : String,
  desc : String,
  status : String,

) 

{
  return { date, type, desc, status };
}

const rows = [
  createData('2022.04.04', 'Water Pipe Issue', 'The water pipe is broken infront of the main meter', 'Fixed'),
  createData('2022.03.04', 'Water Pipe Issue', 'The water pipe is broken infront of the main meter', 'Fixed'),
  createData('2022.02.24', 'Water Meter Issue', 'The water meter is broken infront of the main meter', 'Fixed'),
  createData('2022.01.04', 'Water Pipe Issue', 'The water pipe is broken infront of the main meter', 'Fixed'),
  createData('2021.12.14', 'Water Meter Issue', 'The water meter is broken infront of the main meter', 'Fixed'),
];

export default function Billing() {
  return (

    <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Complaints
        </Typography>

        <Grid item xs={12} md={6} lg={8}>
          <center>
          <div style={{background:'white', 
                      marginLeft: '100px',
                      marginRight: '100px',
                      marginBottom: '30px',
                      padding: '30px',
                       color:'#2065D1',
                       borderRadius:'5px'}}>
                        <img src={close} alt="close" height="20px"
                      style={{marginLeft:'700px', paddingBottom:'5px', marginBottom:'5px'}}
                      />
                      <b>You Have Any Complaints : </b> We operate a 24 hour call center on customer
                       <br/> care hotline 1939. You can call this hotline also to lodge your complaints.           
          </div>
          </center>
        </Grid>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Complaint Type</TableCell>
            <TableCell>Descriptiom</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.desc}</TableCell>
              <TableCell style={{color:'green'}}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <button style={{background:'#2065D1', marginLeft: '800px',
                       marginRight: '40px',
                       marginTop: '5px',
                       borderRadius: '2px',
                       marginBottom: '55px',
                        borderColor: 'white',
                       padding:'15px',
                       color:'white',}}>New Complaint</button>
  
</Container>
  );
}