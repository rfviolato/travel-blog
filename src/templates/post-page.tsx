import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTags } from '@fortawesome/pro-light-svg-icons';

interface IPostProps {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
}

interface IPostPageProps {
  post: IPostProps;
}

interface IHeroImageProps {
  src: string;
}

const Container = styled.article`
  padding-bottom: 80px;
  width: 80vw;
  margin: 0 auto;
`;

const HeroImage = styled.div<IHeroImageProps>`
  width: 100%;
  height: 550px;
  background-image: ${({ src }) => `url(${src})`};
  /* background-position: 50% 50%; */
  background-position: 50% 60%; /* TODO: Remove this when bg is dynamic */
  background-size: cover;
`;

const Title = styled.h1`
  margin-top: 30px;
`;

const PostContent = styled.section``;

const ContentWrapper = styled.div`
  margin-top: 30px;
  font-size: 16px;
`;

const Paragraph = styled.p`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  margin-left: 3px;
  margin-bottom: 30px;
`;

const MetadataInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &:not(:first-child) {
    margin-left: 28px;
  }
`;

const MetadataInfoText = styled.div`
  margin-left: 7px;
  transform: translateY(1px);
`;

interface IDummyContentProps {
  children: string;
}
const DummyContent: React.SFC<IDummyContentProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Paragraph>{children}</Paragraph>
      <Paragraph>{children}</Paragraph>
      <Paragraph>{children}</Paragraph>
      <Paragraph>
        {children}
        {children}
      </Paragraph>
      <Paragraph>
        {children}
        {children}
      </Paragraph>
      <Paragraph>{children}</Paragraph>
    </React.Fragment>
  );
};

const PostPage: React.SFC<IPostPageProps> = ({ post }) => {
  return (
    <Container>
      <PostContent>
        <HeroImage src={post.imageUrl} />

        <Title>{post.title}</Title>

        <Metadata>
          <MetadataInfo>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <MetadataInfoText>June 27th, 2019</MetadataInfoText>
          </MetadataInfo>
          <MetadataInfo>
            <FontAwesomeIcon icon={faTags} />
            <MetadataInfoText>Travel, Amsterdam, Euro-travel</MetadataInfoText>
          </MetadataInfo>
        </Metadata>

        <ContentWrapper>
          <DummyContent>{post.content}</DummyContent>
        </ContentWrapper>
      </PostContent>
    </Container>
  );
};

export default PostPage;
