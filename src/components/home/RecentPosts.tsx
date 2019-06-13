// tslint:disable: jsx-no-lambda
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
  display: flex;
  padding: 30px 0;
  border-radius: 5px;
`;

const PostItemImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  max-width: 500px;
`;

const PostItemBackground = styled.div<IPostItemBackgroundProps>`
  flex: 1 1 auto;
  height: 100%;
  background-position: 50% 50%;
  background-image: ${({ src }: IPostItemBackgroundProps) => `url(${src})`};
  background-size: cover;
  border-radius: 5px;
`;

const PostItemContent = styled.div`
  margin-left: 30px;
  text-align: left;
`;

const PostTitle = styled.h4`
  font-weight: 600;
`;

const PostDescription = styled.div`
  font-size: 19px;
  line-height: 1.4em;
  margin-top: 4px;
`;

const RecentPost: React.SFC<IRecentPost> = ({
  imageSrc,
  title,
  description,
}) => {
  const [isActive, setActive] = useState(false);

  return (
    <PostItemContainer
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <PostItemImageWrapper>
        <PostItemBackground src={imageSrc} />
      </PostItemImageWrapper>
      <PostItemContent>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostItemContent>
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

const Title = styled.h2`
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 14px;
`;

const ListWrapper = styled.div`
  margin-top: 30px;

  &:last-child {
    margin-top: 12px;
  }
`;

const PostItemWrapper = styled.div`
  margin-top: 12px;
  border-bottom: 1px solid #bebebe;
`;

const RecentPosts: React.SFC<IRecentPostsProps> = ({ posts }) => {
  return (
    <Container>
      <Title>Recent Posts</Title>
      <Description>
        Check it out our latest hot tips of this awesome city!
      </Description>
      <ListWrapper>
        {posts.map(({ id, ...post }) => (
          <PostItemWrapper key={id}>
            <RecentPost {...post} />
          </PostItemWrapper>
        ))}
      </ListWrapper>
    </Container>
  );
};

export default RecentPosts;
