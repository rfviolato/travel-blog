import { css, Global } from '@emotion/core';
import React from 'react';

const styles = css`
  body {
    font-family: 'Quicksand';
    line-height: 1.25em;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 1.3;
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 32px;
    line-height: 1.2;
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

  button {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: inherit;
  }

  .center {
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    max-width: 1400px;
  }
`;

const GlobalStyles: React.SFC = () => <Global styles={styles} />;

export default GlobalStyles;
