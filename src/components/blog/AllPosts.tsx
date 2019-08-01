import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/pro-light-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';

interface IAllPostsProps {
  posts: IAllPostsNode[];
}

interface IPostFields {
  slug: string;
}

interface IPostFrontmatter {
  date: string;
  templateKey: string;
  title: string;
}

interface IPostProps {
  // fields: IPostFields;
  excerpt: string;
  frontmatter: IPostFrontmatter;
}

interface IAllPostsListItem extends IPostProps {
  id: string;
}

const MEDIA_QUERY_SIZES = {
  L: '1060px',
  M: '768px',
  S: '660px',
};

const HOVER_TRANSITION_OPTIONS = '300ms ease';
const BORDER_RADIUS = '4px';

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
  border-radius: ${BORDER_RADIUS};

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    display: none;
  }
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
  display: flex;
  position: relative;
  color: inherit;
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

  @media (max-width: ${MEDIA_QUERY_SIZES.S}) {
    &:hover {
      transform: scale(1);
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 21vw;
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  @media (min-width: 1400px) {
    height: 300px;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    height: 30vw;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.S}) {
    height: 45vw;
  }
`;

const PostContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
  border-top: 0;
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
`;

const PostExcerpt = styled.div`
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

const Post: React.SFC<IPostProps> = ({ frontmatter, excerpt }) => {
  return (
    <PostContainer>
      {/* <Image src={imageSrc} /> */}
      <PostContentWrapper>
        <div>
          <h3>{frontmatter.title}</h3>
          <PostExcerpt>{excerpt}</PostExcerpt>
        </div>
        <Date>June 27th, 2019</Date>
      </PostContentWrapper>
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
  margin-top: 20px;
  margin-bottom: 80px;

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    grid-template-columns: repeat(2, 1fr [col]);
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.S}) {
    grid-template-columns: repeat(1, 1fr [col]);
  }
`;

const AllPosts: React.SFC<IAllPostsProps> = ({ posts }) => {
  console.log({ posts });

  return (
    <Container>
      {posts.map(({ node: post }) => (
        <Post
          key={post.id}
          frontmatter={post.frontmatter}
          excerpt={post.excerpt}
        />
      ))}
    </Container>
  );
};

interface IAllPostsNode {
  node: IAllPostsListItem;
}

interface IGatsbyStaticQuery {
  allMarkdownRemark: {
    edges: IAllPostsNode[];
  };
}

export default () => {
  const data: IGatsbyStaticQuery = useStaticQuery(graphql`
    query AllPostsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `);

  return <AllPosts posts={data.allMarkdownRemark.edges} />;
};
