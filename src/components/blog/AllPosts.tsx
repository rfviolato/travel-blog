import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';

interface IAllPostsProps {
  posts: IAllPostsListItem[];
}

interface IPostProps {
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
}

interface IAllPostsListItem extends IPostProps {
  id: string;
}

const PostContainer = styled.div``;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 15vw;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Content = styled.div`
  padding: 0 15px 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const ContentPreview = styled.div`
  margin-top: 5px;
  font-size: 15px;
  line-height: 1.25em;
`;

const Date = styled.div`
  margin-top: 12px;
  font-size: 14px;
  opacity: 0.5;
  font-weight: 700;
`;

const Post: React.SFC<IPostProps> = ({ title, description, imageSrc }) => {
  return (
    <PostContainer>
      <Image src={imageSrc} />
      <Content>
        <h3>{title}</h3>
        <ContentPreview>{description}</ContentPreview>
        <Date>June 27th, 2019</Date>
      </Content>
    </PostContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const PostWrapper = styled.div`
  flex: 1 1 33%;
  padding-right: 30px;

  &:nth-child(3n) {
    padding-right: 0;
  }

  &:nth-child(n + 4) {
    margin-top: 30px;
  }
`;

const AllPosts: React.SFC<IAllPostsProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <PostWrapper key={post.id}>
          <Post {...post} />
        </PostWrapper>
      ))}
    </Container>
  );
};

export default AllPosts;
