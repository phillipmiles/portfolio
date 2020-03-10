export default {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  sizes: {
    0: 0,
    1: 16,
    2: 24,
    3: 32,
    4: 40,
    5: 48,
    6: 56,
    7: 64,
    8: 96,
    9: 128,
    10: 192,
    11: 256,
    12: 360,
    13: 512,
    14: 928,
    content: 1100,
  },
  breakpoints: ['40em', '52em', '64em', '76em'],
  fonts: {
    heading: 'Proxima nova, system-ui, sans-serif',
    body: 'Proxima nova, system-ui, sans-serif',
  },
  fontWeights: {
    thin: '200',
    light: '300',
    normal: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.125',
    '1.5rem',
    '1.75rem',
    '2.25rem',
    '2.625rem',
    '3rem',
    '4.5rem',
    '5.625rem',
    '8rem',
  ],
  borderWidths: {
    thin: 1,
    regular: 2,
    thick: 4,
    xThick: 8,
  },
  radii: {
    small: 4,
    medium: 8,
    large: 16,
    xLarge: 32,
  },
  letterSpacings: {
    tighter: '-0.094rem',
    tight: '-0.031rem',
    normal: '0rem',
    wide: '0.016rem',
    wider: '0.031rem',
    loose: '0.078rem',
    stretched: '0.125rem',
  },
  colors: {
    background: '#ffffff',
    white: '#ffffff',
    black: '#0A0C11',
    primary: '#E5044C',
    secondary: '#66bee2',
    textBlack: '#000000',
    textWhite: '#ffffff',
    neutral: ['#929292'],

    brands: {
      verso: {
        primary: '#493656',
      },
      cpa: {
        primaryLight: 'rgb(242, 238, 232)',
      },
      coles: {
        secondary: '#000000',
      },
    },
  },
  // Shadows designed following Tobias' guide https://tobiasahlin.com/blog/layered-smooth-box-shadows/
  shadows: [
    '0 1px 2px rgba(0,0,0,0.06), 0 2px 2px rgba(0,0,0,0.06), 0 5px 4px rgba(0,0,0,0.06)',
    '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.12)',
    '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11)',
  ],
  textStyles: {
    heading1: {
      fontSize: '7.75rem',
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: '8rem',
      letterSpacing: 'tighter',
    },
    heading2: {
      fontSize: '5.625rem',
      fontFamily: 'heading',
      fontWeight: 'bold',
      lineHeight: '6rem',
      letterSpacing: 'tighter',
    },
    heading3: {
      fontSize: '4.5rem',
      fontFamily: 'heading',
      fontWeight: 'bold',
      letterSpacing: 'tight',
    },
    heading4: {
      fontSize: '2.86rem',
      fontFamily: 'heading',
      fontWeight: 'semibold',
      letterSpacing: 'tight',
    },
    heading5: {
      fontSize: '2.25rem',
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    heading6: {
      fontSize: '1.75rem',
      fontFamily: 'heading',
      fontWeight: 'semibold',
    },
    overline: {
      fontSize: '1.125rem',
      fontFamily: 'body',
      fontWeight: 'semibold',
    },
    introduction: {
      fontSize: '2.25rem',
      fontFamily: 'body',
      fontWeight: 'normal',
    },
    body: {
      fontFamily: 'body',
      fontSize: '1.125rem',
    },
  },
  buttons: {
    Button: {
      primary: {
        color: 'white',
        bg: 'primary',
        borderColor: 'primary',
        boxShadow: 0,
        ':hover': {
          boxShadow: 3,
        },
        ':active': {
          bg: 'primary',
        },
        ':disabled': {
          color: 'textDisabled',
          bg: 'blackDisabled',
          borderColor: 'transparent',
          boxShadow: 'none',
        },
      },
      secondary: {
        color: 'text',
        bg: 'secondary',
        borderColor: 'secondary',
        boxShadow: 1,
        ':hover': {
          boxShadow: 3,
        },
        ':active': {
          bg: 'secondaryDark',
          borderColor: 'secondaryDark',
        },
        ':disabled': {
          color: 'textDisabled',
          bg: 'blackDisabled',
          borderColor: 'transparent',
          boxShadow: 'none',
        },
      },
      outlined: {
        color: 'primaryLight',
        bg: 'white',
        borderColor: 'primaryLight',
        ':hover': {
          bg: 'primaryLightHover',
        },
        ':active': {
          bg: 'primaryLightPressed',
        },
        ':disabled': {
          color: 'textDisabled',
          borderColor: 'blackDisabled',
        },
        ':disabled:hover': {
          bg: 'white',
        },
      },
      text: {
        color: 'primary',
        borderColor: 'transparent',
        p: 0,
        // ':hover': {
        //   bg: 'primaryLightHover',
        // },
        // ':active': {
        //   bg: 'primaryLightPressed',
        // },
        // ':disabled': {
        //   color: 'textDisabled',
        // },
      },
    },
  },
};
