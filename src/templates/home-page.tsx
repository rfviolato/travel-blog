import { graphql } from 'gatsby';
import React from 'react';
import { FeaturedPosts, Hero, RecentPosts } from '../components/home/index';
import Layout from '../components/Layout';
import { LayoutCenteredContent } from './../components/style';

type IHeroQueryData = IGastbyQueryData<{ image: IGastbyImage }>;

interface IHomePageTemplateProps {
  heroImg: IGastbyImage;
}

const mockFeaturedPostsData = [
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '1',
    imageSrc:
      'https://assets.vogue.com/photos/58913999736d5f2410e37356/master/w_1560,c_limit/0-holding-de-pijp-amsterdam-travel-guide.jpg',
    title: 'De Pijp',
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '2',
    imageSrc:
      'https://www.arcam.nl/wp-content/uploads/2017/11/Jannes-Linders_6.jpg',
    title: 'Zuidoost',
  },
];

const mockRecentPosts = [
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '1',
    imageSrc: 'https://cdn.tourradar.com/s3/tour/750x400/84941_f45c34.jpg',
    title: 'De Pijp',
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '2',
    imageSrc:
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/42/0f.jpg',
    title: 'Zuidoost',
  },
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '3',
    imageSrc: 'http://www.reguliers.net/pictures/koningsdag.jpg',
    title: 'De Pijp',
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '4',
    imageSrc:
      'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/321877_Viator_Shutterstock_31143.jpg',
    title: 'Zuidoost',
  },
  {
    description:
      'The most striking thing about Amsterdam is just how true the stereotypes are: The locals are tall, apple-cheeked, and good-looking as they sail past you on fixed-gear bikes; the tree-lined canals are just as picturesque as you’ve heard, and the restaurants and shops are as cozy and well priced as those practical Dutch demand.',
    id: '5',
    imageSrc: 'https://cdn.getyourguide.com/img/tour_img-655953-145.jpg',
    title: 'De Pijp',
  },
  {
    description:
      'The low-rise neighborhood Zuidoost is located in a historically charged place. In the past, there were the Egeldonk and Echtenstein honeycomb apartments that have virtually disappeared completely with the breaker. Instead of the massive concrete flats of the time, one now finds a neighborhood on a human scale. ',
    id: '6',
    imageSrc:
      'https://www.arcam.nl/wp-content/uploads/2017/11/Jannes-Linders_6.jpg',
    title: 'Zuidoost',
  },
];

export const HomePageTemplate: React.SFC<IHomePageTemplateProps> = ({
  heroImg,
}) => {
  const heroImageSrc = heroImg.childImageSharp
    ? heroImg.childImageSharp.fluid.src
    : 'TODO: img not found src';

  return (
    <div>
      <Hero heroImageSrc={heroImageSrc} />
      <FeaturedPosts posts={mockFeaturedPostsData} />
      <LayoutCenteredContent>
        <RecentPosts posts={mockRecentPosts} />
      </LayoutCenteredContent>
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
