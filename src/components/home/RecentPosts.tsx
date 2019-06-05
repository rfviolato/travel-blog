/* tslint:disable:jsx-no-lambda */
import styled from '@emotion/styled';
import React, { useState } from 'react';

interface IRecentPostsProps {
  posts: IRecentPostListItem[];
}

interface IRecentPost {
  title: string;
  description: string;
  imageSrc: string;
}

interface IRecentPostListItem extends IRecentPost {
  id: string;
}

interface IPostItemBackgroundProps {
  src: string;
}

interface IOverlayProps {
  isActive: boolean;
}

const PostItemContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  cursor: pointer;
`;

const PostItemBackground = styled.div<IPostItemBackgroundProps>`
  flex: 1 1 50%;
  width: 100%;
  height: 100%;
  background-position: 50% 50%;
  background-image: ${({ src }: IPostItemBackgroundProps) => `url(${src})`};
  background-size: cover;
  border-radius: 5px;
`;

const Overlay = styled.div<IOverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px;
  color: #fff;
  text-align: left;
  z-index: 1;
  opacity: ${({ isActive }) => (isActive ? '1' : '0')};
  transition: opacity 330ms cubic-bezier(0.215, 0.61, 0.355, 1);
`;

const PostTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const PostDescription = styled.div`
  font-size: 12px;
  line-height: 1.4em;
  margin-top: 4px;
`;

const RecentPost: React.SFC<IRecentPost> = ({
  imageSrc,
  title,
  description,
}) => {
  const [isActive, setActive] = useState(false);
  console.log({ isActive });

  return (
    <PostItemContainer
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <PostItemBackground src={imageSrc} />
      <Overlay isActive={isActive}>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </Overlay>
    </PostItemContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 25px 0;
  text-align: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 14px;
  margin-top: 8px;
`;

const PostListWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  &:last-child {
    margin-top: 12px;
  }
`;

const PostItemWrapper = styled.div`
  margin-right: 12px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const RecentPosts: React.SFC<IRecentPostsProps> = ({ posts }) => {
  return (
    <Container>
      <Title>Popular Posts</Title>
      <Description>
        Check it out our latest hot tips of this awesome city!
      </Description>
      <PostListWrapper>
        {posts.slice(0, 3).map(({ id, ...post }) => (
          <PostItemWrapper key={id}>
            <RecentPost {...post} />
          </PostItemWrapper>
        ))}
      </PostListWrapper>
      <PostListWrapper>
        {posts.slice(3, 6).map(({ id, ...post }) => (
          <PostItemWrapper key={id}>
            <RecentPost {...post} />
          </PostItemWrapper>
        ))}
      </PostListWrapper>
    </Container>
  );
};

export default RecentPosts;
