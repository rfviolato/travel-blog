import { graphql } from 'gatsby';
import React from 'react';
import { FeaturedPosts, Hero } from '../components/home/index';
import Layout from '../components/Layout';

type IHeroQueryData = IGastbyQueryData<{ image: IGastbyImage }>;

interface IHomePageTemplateProps {
  heroImg: IGastbyImage;
}

const mockData = [
  {
    description: 'Howdy',
    id: '1',
    title: 'Fetaured Post 1'
  },
  {
    description: 'Egg',
    id: '2',
    title: 'Fetaured Post 2'
  }
];

export const HomePageTemplate: React.SFC<IHomePageTemplateProps> = ({
  heroImg
}) => {
  const heroImageSrc = heroImg.childImageSharp
    ? heroImg.childImageSharp.fluid.src
    : 'TODO: img not found src';

  return (
    <div>
      <Hero heroImageSrc={heroImageSrc} />
      <FeaturedPosts posts={mockData} />
    </div>
  );
};

const IndexPage = ({ data }: IHeroQueryData) => {
  const { image } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <HomePageTemplate heroImg={image} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
