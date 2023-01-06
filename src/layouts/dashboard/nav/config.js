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
    icon: icon('ic_analytics'),
  },
  {
    title: 'Complaints',
    path: '/dashboard/complaint',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Live Meter',
    path: '/dashboard/billing',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Devices',
    path: '/dashboard/blog',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Payments',
    path: '/dashboard/billing',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Subscriptions',
    path: '/dashboard/products',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Settings',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
