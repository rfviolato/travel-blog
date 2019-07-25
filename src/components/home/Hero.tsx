import styled from '@emotion/styled';
import React from 'react';

interface IHeroProps {
  heroImageSrc: string;
}

interface IHeroImageProps {
  src: string;
}

const Container = styled.div<IHeroImageProps>`
  width: 100%;
  height: 100vh;
  background-position: 50% -60vh;
  background-image: ${({ src }) => `url(${src})`};

  @media (min-height: 800px) {
    background-position: 50% 40%;
  }
`;

const Hero: React.SFC<IHeroProps> = ({ heroImageSrc }) => (
  <Container src={heroImageSrc} />
);

export default Hero;
