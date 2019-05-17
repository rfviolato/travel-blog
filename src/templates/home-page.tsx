import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

type IHeroQueryData = IGastbyQueryData<{ image: IGastbyImage }>;

interface IHomePageTemplateProps {
  heroImg: IGastbyImage;
}

export const HomePageTemplate: React.SFC<IHomePageTemplateProps> = ({
  heroImg
}) => {
  const heroImageSrc = heroImg.childImageSharp
    ? heroImg.childImageSharp.fluid.src
    : 'TODO: img not found src';

  return (
    <div>
      <Hero heroImageSrc={heroImageSrc} />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        massa nec elit luctus, sit amet auctor mi lobortis. Aenean vulputate
        tincidunt ante quis porttitor. Aenean a ante nisi. Vivamus consequat
        faucibus arcu et commodo. Quisque accumsan accumsan odio, cursus
        accumsan dui condimentum ac. Fusce eu odio non sapien condimentum
        maximus ut nec elit. Morbi posuere, elit vitae semper tristique, ligula
        libero consequat turpis, eget tempus arcu lorem id urna. Pellentesque
        sit amet nibh nec massa tincidunt rhoncus ut id tellus. Maecenas tempor
        eros vitae nulla mollis lacinia. Nulla laoreet libero vitae aliquet
        faucibus. Maecenas nec egestas libero, eu ornare neque. Aenean eu
        maximus odio. Curabitur eget lorem ac tellus molestie sollicitudin non
        sit amet eros. Vivamus nec sem nisl. Maecenas quis suscipit magna. Fusce
        quis ligula efficitur, dapibus dolor nec, dignissim magna.
      </div>
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
