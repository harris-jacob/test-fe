const theme = {
  palette: {
    primary: '#e76f51',
    attention: '#e9c46a',
    background: {
      body: '#264653',
      base: '#2a9d8f',
    },
    text: {
      primary: '#FFF',
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
