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
  month : String,
  date : String,
  units : String,
  amount : String,
  status : String,
  payment : String,
  paiddate : String,
) 

{
  return { month, date, units, amount, status, payment, paiddate };
}

const rows = [
  createData('March, 2022', '2022.04.04', '28 Units', '2500.00', 'Paid','Pending','Pending'),
  createData('February, 2022', '2022.03.04', '24 Units', '2000.00', 'Paid','Online','2022.04.04'),
  createData('January, 2022', '2022.02.24', '22 Units', '1800.00', 'Paid','Online','2022.03.04'),
  createData('December, 2021', '2022.01.04', '27 Units', '2450.00', 'Paid','Online','2022.02.24'),
  createData('November, 2021', '2021.12.14', '17 Units', '1450.00', 'Paid','Online','2022.01.04'),
];

export default function Billing() {
  return (


    <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Billing
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
                      <b>History : </b> You can see "Bill History" and "Payment History" back
                       <br/> to 12 months, if you want to see more info touch on each row.            
          </div>
          </center>
        </Grid>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell>Paid Date</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.month}
              </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.units}</TableCell>
              <TableCell><b>{row.amount}</b></TableCell>
              <TableCell style={{color:'green'}}>{row.status}</TableCell>
              <TableCell>{row.payment}</TableCell>
              <TableCell>{row.paiddate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>

  );
}