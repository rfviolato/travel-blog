import React from 'react';
import styled from '@emotion/styled';

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

const PostContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 15vw;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const ContentPreview = styled.div`
  flex-direction: column;
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
      <ContentWrapper>
        <div>
          <h3>{title}</h3>
          <ContentPreview>{description}</ContentPreview>
        </div>
        <Date>June 27th, 2019</Date>
      </ContentWrapper>
    </PostContainer>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr [col]);
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  align-items: stretch;
  margin-top: 20px;
`;

const PostWrapper = styled.div`
  /* width: calc(100% / 3);
  padding-right: 30px;

  &:nth-of-type(3n) {
    padding-right: 0;
  }

  &:nth-of-type(n + 4) {
    margin-top: 30px;
  } */
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
