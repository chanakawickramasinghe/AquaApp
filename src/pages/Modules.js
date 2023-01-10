import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import * as React from 'react';
import { useState } from 'react';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { sentenceCase } from 'change-case';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// sections
import { filter } from 'lodash';

import {
  Card,
  Table,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
  TablePagination,
  Grid, Container, Typography
} from '@mui/material';
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
import Label from '../components/label';
import USERLIST from '../_mock/user';
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// ----------------------------------------------------------------------

export default function Modules() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filterName, setFilterName] = useState('');
  
  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const TABLE_HEAD = [
    { id: 'role', label: 'Device Name', alignRight: false },
    { id: 'id', alignRight: false },
  ];
  return (
    <>
      <Helmet>
        <title> Aqua App - Modules </title>
      </Helmet>


      <Container maxWidth="xl">

        <Grid container spacing={3}>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Grid item xs={12} md={6} lg={4}>
                  <TableContainer>
                    <Table>
                      <UserListHead
                        headLabel={TABLE_HEAD}
                      />
                      <TableBody>
                        {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                          const { role, status} = row;

                          return (
                            <TableRow>                              
                              <TableCell align="left">
                                <Label color={(status === 'banned' && 'error') || 'success'}>Active</Label>
                              </TableCell>
                              <TableCell align="left">{role}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>                
                    </Table>
                  </TableContainer>
                </Grid>       
              </TabPanel>
              <TabPanel value="2">
                <Grid item xs={12} md={6} lg={4}>
                  <TableContainer>
                    <Table>
                      <UserListHead
                        headLabel={TABLE_HEAD}
                      />
                      <TableBody>
                        {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                          const { role, status} = row;

                          return (
                            <TableRow>                              
                              <TableCell align="left">
                                <Label color={(status === 'banned' && 'error') || 'success'}>Active</Label>
                              </TableCell>
                              <TableCell align="left">{role}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>                
                    </Table>
                  </TableContainer>
                </Grid>       
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Container>
    </>
  );
}
