import { css, Global } from '@emotion/core';
import React from 'react';

const styles = css`
  body {
    font-family: 'Quicksand';
  }

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 32px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 12px;
  }
`;

const GlobalStyles: React.SFC = () => <Global styles={styles} />;

export default GlobalStyles;
