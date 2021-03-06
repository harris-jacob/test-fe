const theme = {
  palette: {
    primary: '#c8d8e4',
    secondary: '#c8d8e4',
    attention: '#6e6e6e',
    background: {
      body: '#171717',
      base: 'rgb(68, 68, 68, 0.5)',
      modal: 'rgb(68, 68, 68)',
    },
    text: {
      primary: '#EDEDED',
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  borderRadius: '4px',
  typography: {
    h4: {
      'font-weight': 'bold',
      'font-size': '28px',
    },
    h5: {
      'font-weight': 'bold',
      'font-size': '22px',
    },
    h6: {
      'font-weight': 'bold',
      'font-size': '16px',
    },
    body: {
      'font-weight': 'normal',
      'font-size': '14px',
    },
  },
};

export default theme;
