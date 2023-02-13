import React,{useRef, useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import {addDoc,collection, getDocs  } from "@firebase/firestore";
import {firestore} from "../firebase";
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppWaterUsage,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const [data, setData] = useState([]);
  let sum = 0;  
  const [total, setTotal] = useState(0);
  const [flowRate, setFlowRate] = useState(0);

  useEffect(() => {
    const retrieveData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "sv1"));
    const dataArray = [];
    
    querySnapshot.forEach((doc) => { 
      doc.data().flowRate.forEach((number) => {
        sum += number;
      });
      dataArray.push({ id: doc.id, ...doc.data() });
      const array = doc.data().flowRate;
      if (array.length > 0) {
        setFlowRate(array[array.length - 1]);
      }
    });
    setTotal(sum);
    setData(dataArray);
  };
  retrieveData();
  }, []);

const today = new Date();
const date = today.getDate();
console.log(date);

  return (
    <>
      <Helmet>
        <title> Aqua App - Home </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Home
        </Typography>
        {data.map((item) => {
          return (
          <div key={item.id}>
            <Grid container spacing={3} >
              <Grid item xs={12} md={6} lg={8}>
                <AppWebsiteVisits
                  title="Water Usage"
                  chartLabels={[
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat',
                    'Sun',
                  ]}
                  chartData={[
                    {
                      name: 'Water Usage',
                      type: 'column',
                      fill: 'solid',
                      data: [item.units.monday, item.units.tuesday, item.units.wednesday, item.units.thursday, item.units.friday, item.units.saturday, item.units.sunday],
                    },
                  ]}
                />
              </Grid>          

              <Grid item xs={12} md={6} lg={4}>
                <AppCurrentVisits
                  title="Payment Dues"
                  chartData={[
                    { label: 'America', value: 4344 },
                    { label: 'Asia', value: 5435 },
                    { label: 'Europe', value: 1443 },
                    { label: 'Africa', value: 4443 },
                  ]}
                  chartColors={[
                    theme.palette.primary.main,
                    theme.palette.info.main,
                    theme.palette.warning.main,
                    theme.palette.error.main,
                  ]}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary title="Daily Usage" color="info" total={total/1000} icon={'material-symbols:water-drop-outline'} />
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary title="Monthly Usage" total={(total/1000)*date} color="info" icon={'material-symbols:calendar-month-outline-rounded'} />
              </Grid>

              <Grid item xs={12} sm={6} md={2}>
                <AppWidgetSummary title="Flow Rate" total={flowRate} color="info" icon={'mdi:water-flow'} />
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                {item.status === 0 ? (
                  <AppWidgetSummary title="Status" total="OFF" color="error" icon={'pajamas:status-closed'} />
                ) : (
                  <AppWidgetSummary title="Status" total="ON" color="warning" icon={'pajamas:status-closed'} />
                )}
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <AppWaterUsage
                  title="Water Usage"
                  chartData={[
                    { label: 'America', value: 4344 },
                    { label: 'Asia', value: 5435 },
                    { label: 'Europe', value: 1443 },
                    { label: 'Africa', value: 4443 },
                  ]}
                  chartColors={[
                    theme.palette.primary.main,
                    theme.palette.info.main,
                    theme.palette.warning.main,
                    theme.palette.error.main,
                  ]}
                />
              </Grid>
            </Grid> 
          
            </div>
            );
          })}
      </Container>
    </>
  );
}