import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
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
import rocket from '../components/img/rocket.png';
import close from '../components/img/close.png';
// ----------------------------------------------------------------------

export default function SubscriptionsPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Subscriptions - Aqua App</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Subscriptions
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
                      <b>Upgrade your features : </b> You can subscribe one of your packages <br/> to access more features!
                      {/* <img src={close} alt="close" height="40px"
                      style={{float:'right', paddingBottom:'5px', marginBottom:'15px'}}
                      /> */}
          </div>
          </center>
        </Grid>
        <center>
        <div style={{background:'#D1E9FC', 
                      marginLeft: '100px',
                      // marginRight: '100px',
                      marginBottom: '30px',
                      width: '39%',
                      float: 'left',

                       color:'#2065D1',
                       borderRadius:'5px'}}>
                      <h3>Premium Subscription </h3> 
                      <h3>(Home) </h3> 
                      <div style={{background:'#D1E9FC', 
                                  width: '50%',
                                  float: 'left',
                                  color:'#2065D1',
                                  borderRadius:'5px',}}>
                      <img src={rocket} alt="Rocket" height="128px"/>
                      </div>
                      <div style={{background:'#D1E9FC', 
                                  width: '45%',
                                  float: 'right',
                                  color:'#2065D1',
                                  borderRadius:'5px',}}>
                      <ul>
                        <li>Feature to identify water leaks</li>
                        <li>Unlimited after services</li>
                        <li>Remote control access for local devices</li>
                      </ul>
                      </div>
                      <div style={{marginTop: '100px', paddingTop:'100px', paddingBottom: '50px'}}>
                        <button style={{background:'#D1E9FC', 
                        
                                  color:'#2065D1',
                                  width: '150px',
                                  borderRadius:'5px',
                                  borderColor:'#2065D1',
                                  padding:'10px',
                                  marginRight:'20px',
                                  marginLeft:'20px',}}>View More</button>
                        <button style={{background:'#2065D1', 
                        
                        color:'white',
                        borderRadius:'5px',
                        width: '150px',
                        borderColor:'#2065D1',
                        padding:'10px',
                        marginRight:'20px',}}>Upgrade</button>
                      </div>

          </div>
          <div style={{background:'#ABF7B1',
          marginLeft:'15px', 
                      marginRight: '90px',
                      // marginRight: '100px',
                      marginBottom: '30px',
                      width: '39%',
                      float: 'left',

                       color:'#00AB41',
                       borderRadius:'5px'}}>
                      <h3>Premium Subscription </h3> 
                      <h3>(Home) </h3> 
                      <div style={{background:'#ABF7B1', 
                                  width: '50%',
                                  float: 'left',
                                  color:'#00AB41',
                                  borderRadius:'5px',}}>
                      <img src={rocket} alt="Rocket" height="128px"/>
                      </div>
                      <div style={{background:'#ABF7B1', 
                                  width: '45%',
                                  float: 'right',
                                  color:'#00AB41',
                                  borderRadius:'5px',}}>
                      <ul>
                        <li>Measure and control water usage</li>
                        <li>Feature to identify water leaks</li>
                        <li>Unlimited after services</li>
                      </ul>
                      </div>
                      <div style={{marginTop: '100px', paddingTop:'100px', paddingBottom: '50px'}}>
                        <button style={{background:'#ABF7B1', 
                        
                                  color:'#00AB41',
                                  width: '150px',
                                  borderRadius:'5px',
                                  borderColor:'#00AB41',
                                  padding:'10px',
                                  marginRight:'20px',
                                  marginLeft:'20px',}}>View More</button>
                        <button style={{background:'#00AB41', 
                        
                        color:'white',
                        borderRadius:'5px',
                        width: '150px',
                        borderColor:'#00AB41',
                        padding:'10px',
                        marginRight:'20px',}}>Upgrade</button>
                      </div>

          </div>
         
          </center>

          

      </Container>
    </>
  );
}