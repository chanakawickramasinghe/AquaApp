import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  // isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    'Master WF',
    'Slave WF1',
    'Slave WF2',
    'Slave WF3'
  ]),
}));

export default users;
