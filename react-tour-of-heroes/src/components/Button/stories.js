import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from './';

storiesOf('Button')
  .add('default', withInfo(`
    Lorem ipsum
  `)(() =>
    <Button>Lorem ipsum</Button>
  ))
  .add('outline', () => (
    <Button outline>Lorem ipsum</Button>
  ))
