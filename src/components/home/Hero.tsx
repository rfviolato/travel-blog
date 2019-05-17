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
  background-position: 50% 50%;
  background-image: ${({ src }: IHeroImageProps) => `url(${src})`};
`;

const Hero: React.SFC<IHeroProps> = ({ heroImageSrc }) => (
  <Container src={heroImageSrc} />
);

export default Hero;