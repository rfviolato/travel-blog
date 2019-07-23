import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/pro-light-svg-icons';

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

const HOVER_TRANSITION_OPTIONS = '300ms ease';

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 50px;
  opacity: 0;
  transition: opacity ${HOVER_TRANSITION_OPTIONS};
`;

const OverlayIcon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8em;
  height: 1.8em;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: inherit;
  transform: rotate(-6deg) scale(0.97);
  transition: transform ${HOVER_TRANSITION_OPTIONS};
`;

const PostContainer = styled.a`
  position: relative;
  display: block;
  color: inherit;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform ${HOVER_TRANSITION_OPTIONS};

  &:hover {
    transform: scale(1.025);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }

  &:hover ${OverlayIcon} {
    transform: rotate(0) scale(1);
  }
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
      <Overlay>
        <OverlayIcon>
          <FontAwesomeIcon icon={faEye} />
        </OverlayIcon>
      </Overlay>
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

const AllPosts: React.SFC<IAllPostsProps> = ({ posts }) => {
  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Container>
  );
};

export default AllPosts;
