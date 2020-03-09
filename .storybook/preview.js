import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from '../src/lib/ThemeProvider';
import { ParallaxProvider } from 'react-scroll-parallax';
const AppDecorator = storyFn => (
  <ParallaxProvider><ThemeProvider>{storyFn()}</ThemeProvider></ParallaxProvider>
);

addDecorator(AppDecorator);
