import styled from '@emotion/styled';
import React from 'react';

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

const PostItemContainer = styled.div`
  background-color: red;
  width: 225px;
  height: 225px;
  border-radius: 5px;
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

const RecentPost: React.SFC<IRecentPost> = ({ imageSrc }) => {
  return (
    <PostItemContainer>
      <PostItemBackground src={imageSrc} />
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
