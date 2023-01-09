import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import { useChart } from '../../../components/chart';
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
            <h1>Rs. 2461.34</h1>
            <button style={{backgroundColor: 'white', color: 'blue', borderRadius: '5px',
                            paddingLeft: '25px', paddingRight: '25px', borderColor: 'white'
                            // paddingTop: '4px', paddingBottom: '4px'
                          }}>
              <h3>Pay Now</h3>
            </button>
            <p style={{paddingBottom:'33px'}}>
              Last Payment <br/>
              24 November 2021 <br/>
              5400.00 LKR <br/>
              (Online Transaction)
            </p>
          </div>
        </center>
    </Card>
  );
}
