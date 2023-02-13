import React,{useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import {addDoc,collection, getDocs  } from "@firebase/firestore";
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { useChart } from '../../../components/chart';
import {firestore} from "../../../firebase";
// import { padding } from '@mui/system';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const StyledChartWrapper = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));



// ----------------------------------------------------------------------

AppCurrentVisits.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartColors: PropTypes.arrayOf(PropTypes.string),
  chartData: PropTypes.array,
  largewords: PropTypes.string,
};

export default function AppCurrentVisits({ title, subheader, chartColors, chartData, largewords, ...other }) {

  let sum = 0;  
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [lastData, setLastData] = useState(null);
  let paymentSum = 0;
  let billingSum = 0;  
 

  useEffect(() => {
    const retrieveData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "sv1"));
    const dataArray = [];
    const dataArray2 = [];
    const dataArray3 = [];

    
    querySnapshot.forEach((doc) => { 
      doc.data().flowRate.forEach((number) => {
        sum += number;
      });
    });
    setTotal(sum);
    const querySnapshot2 = await getDocs(collection(firestore, "Payment")); 
    const querySnapshot3 = await getDocs(collection(firestore, 'Billing'));

    querySnapshot2.forEach((doc) => {
      dataArray2.push({ id: doc.id, ...doc.data() });
    });
    querySnapshot3.forEach((doc) => {
      dataArray3.push({ id: doc.id, ...doc.data() });
    });
    setLastData(dataArray2.slice(-1)[0]);
    dataArray2.forEach(number => {
      paymentSum += number.Amount;
    });
    dataArray3.forEach(number => {
      billingSum += number.amount;
    });
    setTotal1((billingSum - paymentSum).toFixed(2));
  };
  retrieveData();
}, []);

  
const handleClick = () => {    
    const amount = (total/1000)*30*150;
    localStorage.setItem("amount", amount);
    window.location.href = `http://localhost:3000/dashboard/payments`;
  }

  // const date = lastData ? lastData.PaidDate.toDate() : null;
  // const year = date ? date.getFullYear(): null;
  // const month = date ? date.getMonth() + 1: null; // 0-based index, add 1 to get the human-readable month
  // const day = date ? date.getDate(): null;
  

  const theme = useTheme();
  const chartLabels = chartData.map((i) => i.label);
  const chartSeries = chartData.map((i) => i.value);
  const chartOptions = useChart({
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
    },
  });

  return (
    <>
        <Card {...other}>
              <CardHeader title={title} subheader={subheader} />
              <center>
                <div style={{backgroundColor: '#2065D1',
                            color: 'white', 
                            marginLeft: '40px',
                            marginRight: '40px',
                            marginTop: '25px',
                            borderRadius: '10px',
                            marginBottom: '25px',
                            }}>
                              <br/>
                  <h3>Your Due Amount </h3>
                  <h1>Rs. {total1}</h1>
                  <button onClick={handleClick} style={{backgroundColor: 'white', color: 'blue', borderRadius: '5px',
                                  paddingLeft: '25px', paddingRight: '25px', borderColor: 'white'
                                  // paddingTop: '4px', paddingBottom: '4px'
                                }}>
                    <h3>Pay Now</h3>
                  </button>
                  <p style={{paddingBottom:'33px'}}>
                    Last Payment <br/>
                    {lastData ? (
                      <>
                        {lastData.Amount} LKR <br/>
                        {lastData.PaidDate}
                      </>
                    ) : (
                      <h1>Loading...</h1>
                    )}
                  </p>
                </div>
              </center>
        </Card>
    </>
  );
}
