// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
// change the icon type to PNG and SVG accordingly
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('home'),
  },
  {
    title: 'Billing',
    path: '/dashboard/billing',
    icon: icon('bill'),
  },
  {
    title: 'Complaints',
    path: '/dashboard/complaint',
    icon: icon('complaint'),
  },
  {
    title: 'Live Meter',
    path: '/dashboard/live',
    icon: icon('meter'),
  },
  {
    title: 'Devices',
    path: '/dashboard/blog',
    icon: icon('devices'),
  },
  {
    title: 'Payments',
    path: '/dashboard/payments',
    icon: icon('payments'),
  },
  {
    title: 'Subscriptions',
    path: '/dashboard/products',
    icon: icon('subscriptions'),
  },
  {
    title: 'Settings',
    path: '/dashboard/user',
    icon: icon('settings'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
