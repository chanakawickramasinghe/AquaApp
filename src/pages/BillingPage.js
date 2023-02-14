import React,{useRef, useState, useEffect} from 'react';
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

import {addDoc,collection, getDocs, orderBy, query  } from "@firebase/firestore";
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import close from '../components/img/close.png';
import {firestore} from "../firebase";





function createData(
  month : String,
  date : String,
  units : String,
  amount : String,
  status : String,
  paiddate : String,
) 

{
  return { month, date, units, amount, status, paiddate };
}





export default function Billing() {
  const [data, setData] = useState([]);
  // let paymentSum = 0;
  // let billingSum = 0;  


  useEffect(() => {
    const retrieveData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "Payment"));
    const querySnapshot2 = await getDocs(query(collection(firestore, "Billing"), orderBy('billDate')));

    const dataArray = [];
    
    querySnapshot2.forEach((doc) => {
      // doc.data().Amount.forEach((number) => {
      //   paymentSum += number;
      // });
      dataArray.push({ id: doc.id, ...doc.data() });
    });

    // querySnapshot2.forEach((doc) => {
    //   doc.data().amount.forEach((number) => {
    //     billingSum += number;
    //   });
    // });
    setData(dataArray);
  };
  retrieveData();
  }, []);

  const rows = data.map((row) => {
    // const billDate = row ? row.BillDate.toDate() : null;
    // const billYear = billDate ? billDate.getFullYear(): null;
    // const billMonth = billDate ? billDate.getMonth() + 1: null; // 0-based index, add 1 to get the human-readable month
    // const billDay = billDate ? billDate.getDate(): null;

    // const paidDate = row ? row.PaidDate.toDate() : null;
    // const paidYear = paidDate ? paidDate.getFullYear(): null;
    // const paidMonth = paidDate ? paidDate.getMonth() + 1: null; // 0-based index, add 1 to get the human-readable month
    // const paidDay = paidDate ? paidDate.getDate(): null;

    return createData(row.month, row.billDate, row.units, row.amount);
  });
  
  

  // const rows = [
  //   createData('March, 2022', '2022.04.04', '28 Units', '2500.00', 'Paid','Pending','Pending'),
  //   createData('February, 2022', '2022.03.04', '24 Units', '2000.00', 'Paid','Online','2022.04.04'),
  //   createData('January, 2022', '2022.02.24', '22 Units', '1800.00', 'Paid','Online','2022.03.04'),
  //   createData('December, 2021', '2022.01.04', '27 Units', '2450.00', 'Paid','Online','2022.02.24'),
  //   createData('November, 2021', '2021.12.14', '17 Units', '1450.00', 'Paid','Online','2022.01.04'),
  // ];
  

  return (


    <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Billing{rows.Status}
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
                        {/* <img src={close} alt="close" height="20px"
                      style={{marginLeft:'700px', paddingBottom:'5px', marginBottom:'5px'}}
                      /> */}
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
            <TableCell>Bill Date</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Amount</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>

  );
}