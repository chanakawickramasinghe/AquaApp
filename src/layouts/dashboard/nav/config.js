// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Billing',
    path: '/billing/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Complaints',
    path: '',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Live Meter',
    path: '',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Devices',
    path: '',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Payments',
    path: '',
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
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
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
