export default {
  styles: {
    root: {
      // Reset
      '*': {
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'optimizelegibility',
      },

      body: {
        margin: '0',
      },

      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
      },

      // Custom
      fontFamily: 'body',
      fontSize: ['16px', '18px'],
    },
  },
};
