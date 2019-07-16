import React from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/core';

interface IImageProps {
  caption?: string;
  src: string;
}

const Container = styled.figure`
  float: right;
  margin-bottom: 15px;
  margin-left: 15px;
`;

const Img = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 2px;
`;

const Caption = styled.figcaption`
  font-size: 0.95em;
  opacity: 0.8;
  margin-left: 5px;
`;

const Image: React.SFC<IImageProps> = ({ caption, src }) => (
  <Container>
    <Img src={src} /> {/* TODO: Use gatsby image once this is dynamic */}
    {caption && <Caption>{caption}</Caption>}
  </Container>
);

export default Image;
