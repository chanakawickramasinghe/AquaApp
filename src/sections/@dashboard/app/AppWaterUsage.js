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

// ----------------------------------------------------------------------

const CHART_HEIGHT = 145;
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

AppWaterUsage.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartColors: PropTypes.arrayOf(PropTypes.string),
  chartData: PropTypes.array,
};

export default function AppWaterUsage({ title, subheader, chartColors, chartData, ...other }) {
  
  let sum = 0;  
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const retrieveData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "sv1"));
    const dataArray = [];
    
    querySnapshot.forEach((doc) => { 
      doc.data().flowRate.forEach((number) => {
        sum += number;
      });
    });
    setTotal(sum);
  };
  retrieveData();
  }, []);
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
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <center>
          <div style={{backgroundColor: 'white',
                       color: '#2065D1', 
                       marginLeft: '40px',
                       marginRight: '40px',
                       marginTop: '5px',
                       borderRadius: '10px',
                       marginBottom: '55px',
                       }}>
                        <br/>
            <h2>You Have Consumed <br/>
            {total/1000} Units Today!!! </h2>
        
          </div>
        </center>
    </Card>
  );
}
