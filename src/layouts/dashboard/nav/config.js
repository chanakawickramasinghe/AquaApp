// component
import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import SvgColor from '../../../components/svg-color';


// ----------------------------------------------------------------------
// change the icon type to PNG and SVG accordingly
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />;

const navConfig = [  
  {
    component: CNavItem,
    title: 'Home',
    path: '/dashboard/app',
    icon: icon('home'),
  },
  {
    component: CNavItem,
    title: 'Billing',
    path: '/dashboard/billing',
    icon: icon('bill'),
  },
  {
    component: CNavItem,
    title: 'Complaints',
    path: '/dashboard/complaint',
    icon: icon('complaint'),
  },
  {
    component: CNavItem,
    title: 'Live Meter',
    path: '/dashboard/live',
    icon: icon('meter'),
  },
  // {
  //   component: CNavItem,
  //   title: 'Devices',
  //   path: '/dashboard/blog',
  //   icon: icon('devices'),
  // },
  {
    component: CNavItem,
    title: 'Modules',
    path: '/dashboard/modules',
    icon: icon('settings'),
  },
  {
    component: CNavItem,
    title: 'Payments',
    path: '/dashboard/payments',
    icon: icon('payments'),
  },
  // {
  //   component: CNavItem,
  //   title: 'Test',
  //   path: '/dashboard/test',
  //   icon: icon('subscriptions'),
  // },
  // {
  //   component: CNavItem,
  //   title: 'Subscriptions',
  //   path: '/dashboard/subscription',
  //   icon: icon('subscriptions'),
  // },
  // {
  //   component: CNavItem,
  //   title: 'Settings',
  //   path: '/dashboard/settings',
  //   icon: icon('settings'),
  // },
  
  // {
  //   component: CNavItem,
  //   title: 'Payments',
  //   path: '/dashboard/payments',
  //   icon: icon('modules'),
  // },
  // {
  //   component: CNavGroup,
  //   title: 'Buttons',
  //   path: '/buttons',
  //   icon: icon('settings'),
  //   items: [
  //     {
  //       component: CNavItem,
  //       title: 'Buttons',
  //       path: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       title: 'Buttons groups',
  //       path: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       title: 'Dropdowns',
  //       path: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'register',
    path: '/register',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
