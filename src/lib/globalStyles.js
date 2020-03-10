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

      a: {
        textDecoration: 'none',
      },

      button: {
        border: 0,
        padding: 0,
        fontSize: '100%',
        backgroundColor: 'transparent',
      },

      // Custom
      fontFamily: 'body',
      fontSize: ['16px', '18px'],
    },
  },
};
