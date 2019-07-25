import styled from '@emotion/styled';
import { css } from '@emotion/core';
import React from 'react';

interface IFeaturedPost {
  title: string;
  description: string;
  imageSrc: string;
}

interface IFeaturedPostListItem extends IFeaturedPost {
  id: string;
}

interface IFeaturedPostProps {
  posts: IFeaturedPostListItem[];
}

interface IFeaturedPostImageProps {
  src: string;
}

const MEDIA_QUERY_SIZES = {
  XXL: '1300px',
  XL: '1100px',
  L: '900px',
  M: '600px',
};

const FeaturedPostContainer = styled.div`
  display: flex;
  height: 30vw;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.XXL}) {
    height: 45vw;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.XL}) {
    height: 60vw;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    height: 75vw;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    height: auto;
    flex-direction: column;

    &:nth-of-type(even) {
      margin-top: 3px;
      flex-direction: column-reverse;
    }
  }
`;

const FeaturedPostInfo = styled.div`
  padding: 20px;
  background-color: #eee;
  flex: 1 1 50%;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    flex: 1 1 auto;
  }
`;

const FeaturedPostImage = styled.div<IFeaturedPostImageProps>`
  flex: 1 1 50%;
  height: 100%;
  background-position: 50% 50%;
  background-image: ${({ src }: IFeaturedPostImageProps) => `url(${src})`};
  background-size: cover;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    flex: 0 0 auto;
    height: 300px;
  }
`;

const FeaturedPostInfoTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const FeaturedPostInfoDescription = styled.div`
  font-size: 16px;
  margin-top: 12px;
`;

const FeaturedPost: React.SFC<IFeaturedPost> = ({
  title,
  description,
  imageSrc,
}) => (
  <FeaturedPostContainer>
    <FeaturedPostInfo>
      <FeaturedPostInfoTitle>{title}</FeaturedPostInfoTitle>
      <FeaturedPostInfoDescription>{description}</FeaturedPostInfoDescription>
    </FeaturedPostInfo>
    <FeaturedPostImage src={imageSrc} />
  </FeaturedPostContainer>
);

const FeaturedPosts: React.SFC<IFeaturedPostProps> = ({ posts }) => {
  return (
    <div>
      {posts.map(({ id, ...post }) => (
        <FeaturedPost key={id} {...post} />
      ))}
    </div>
  );
};

export default FeaturedPosts;
