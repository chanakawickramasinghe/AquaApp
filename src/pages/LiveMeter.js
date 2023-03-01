import React,{useRef, useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import {addDoc,collection, getDocs  } from "@firebase/firestore";
import Calendar from 'react-calendar';
import {firestore} from "../firebase";
// components
import Iconify from '../components/iconify';
import 'react-calendar/dist/Calendar.css';
// sections
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
import close from '../components/img/close.png';


// ----------------------------------------------------------------------

export default function LiveMeter() {
  const theme = useTheme();
  const [data, setData] = useState([]);

  const [number, setNumber] = useState(2300);
  const [number1, setNumber1] = useState(2300);
  const [number2, setNumber2] = useState(2300);
  const [number3, setNumber3] = useState(2300);
  const [number4, setNumber4] = useState(2300);
  const [number5, setNumber5] = useState(2300);
  const [number6, setNumber6] = useState(2300);
  const [number7, setNumber7] = useState(2300);

  // let num1 = 0;
  // let num2 = 0;


  const [min, setMin] = useState(2400);
  const [max, setMax] = useState(2500);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setNumber(newNumber);   
      
    }, 5000);

    return () => clearInterval(interval);
  }, [min, max]);

  function refreshValues() {
    setInterval(() => {
      setNumber1(number);
      setNumber2(number1);
      setNumber3(number2);
      setNumber4(number3);
      setNumber5(number4);
      setNumber6(number5);
      setNumber7(number6);
    }, 5000);
  }
  
  refreshValues();  

  useEffect(() => {
    const retrieveData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "sv1"));
    const dataArray = [];
    
    querySnapshot.forEach((doc) => { 
      dataArray.push({ id: doc.id, ...doc.data() });
    });
    setData(dataArray);
  };  
  retrieveData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Aqua App - LiveMeter </title>
      </Helmet>

      <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
          Live Meter
        </Typography>
        {data.map((item) => {
          return (
          <div key={item.id}>

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
                      <b>Bill Calculator : </b> Consumption will provide for 30 days when calculating 
                       <br/> the bill amount and this will calculate the domestic bill amount.           
          </div>
          </center>
        </Grid>

        <Grid container spacing={3}>
 

          <Grid item xs={12} md={6} lg={8}>
            <LiveMeterGraph
              title="Water Flow Rate"
              subheader="(+43%) than last year"
              chartData={[                
                {
                  type: 'line',
                  fill: 'solid',
                  data: [number7 ,number6 , number5, number4, number3, number2, number1],
                },
              ]}
            />

              {/* #To use when meter is 0 */}

            {/* <LiveMeterGraph
              title="Water Flow Rate"
              subheader="(+43%) than last year"
              chartData={[                
                {
                  type: 'line',
                  fill: 'solid',
                  data: [0 ,0 , 0, 0, 0, 0, 0],
                },
              ]}
            /> */}

              {/* ---------------------------------- */}

          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Calendar calendarType="US"/>
          </Grid>
          

          
        </Grid>
        {number6} {number5} {number4} {number3} {number2} {number1}  
        </div>
            );
          })}
      </Container>
    </>
  );
}
