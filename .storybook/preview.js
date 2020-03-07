import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../src/lib/ThemeProvider';

const AppDecorator = storyFn => (
  <ThemeProvider>{storyFn()}</ThemeProvider>
);

addDecorator(AppDecorator);
