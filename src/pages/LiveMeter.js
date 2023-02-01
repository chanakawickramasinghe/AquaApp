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
                        <img src={close} alt="close" height="20px"
                      style={{marginLeft:'700px', paddingBottom:'5px', marginBottom:'5px'}}
                      />
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
                  data: [item.units.monday, item.units.tuesday, item.units.wednesday, item.units.thursday, item.units.friday, item.units.saturday, item.units.sunday],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Calendar calendarType="US"/>
          </Grid>
          

          
        </Grid>
        </div>
            );
          })}
      </Container>
    </>
  );
}
