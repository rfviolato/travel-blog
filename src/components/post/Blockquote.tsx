import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface IBlockquoteProps {
  children: ReactNode;
}

const MEDIA_QUERY_SIZES = {
  XL: '1000px',
};

const Container = styled.blockquote`
  margin: 0; /* Overrides browser default */
  display: table; /* Fixes problem with images floating left next to blockquote */
  padding: 10px 0;
  margin: 1em 0;
  padding-left: 12px;
  border-left-width: 3px;
  border-left-color: teal;
  border-left-style: solid;

  @media (max-width: ${MEDIA_QUERY_SIZES.XL}) {
    display: block;
  }
`;

const Text = styled.span`
  font-size: 1.15em;
  opacity: 0.8;
  font-style: italic;
`;

const Blockquote: React.SFC<IBlockquoteProps> = ({ children }) => (
  <Container>
    <Text>{children}</Text>
  </Container>
);

export default Blockquote;
