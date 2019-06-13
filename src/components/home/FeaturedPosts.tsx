import styled from '@emotion/styled';
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

const FeaturedPostContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 30vw;
  max-height: 500px;

  &:nth-child(even) {
    flex-flow: row-reverse;
  }
`;

const FeaturedPostInfo = styled.div`
  padding: 20px;
  background-color: #eee;
  flex: 1 1 50%;
`;

const FeaturedPostImage = styled.div<IFeaturedPostImageProps>`
  flex: 1 1 50%;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-image: ${({ src }: IFeaturedPostImageProps) => `url(${src})`};
  background-size: cover;
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

const FeaturedPostWrapper = styled.div`
  display: flex;
  flex-flow: row;
`;

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
