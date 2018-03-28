import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Box from './';

storiesOf('Box')
  .add('default', withInfo(`
    Lorem ipsum dolor at
  `)(() =>
    <Box>Lorem ipsum dolor at</Box>
  ))
  .add('align text center', () => (
    <Box textAlign="center">Lorem ipsum dolor at</Box>
  ))
