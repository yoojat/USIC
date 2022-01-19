import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      mainBlue: '#3A8BC2';
      secondBlue: '#5B9ACF';
      thirdBlue: '#A5C4E3';
      fourthBlue: '#D4E5F5';
      fifthBlue: '#6262F5';
      purple: '#8661de';
      blue: '#00bac7';
      gray: '#f6f6f6';
      green: '#07b495';
      lightGreen: '#99ecdd';
      darkGray: '#54595d';
    };
    boxShadow: {
      normal: '0 3px 8px 0 rgb(0 0 0 / 10%)';
      purple: '0 3px 8px 0 #d6c9ff';
      blue: '0 3px 8px 0 #b3e2e6';
    };
  }
}
