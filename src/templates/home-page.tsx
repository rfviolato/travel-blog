import { graphql } from 'gatsby';
import React from 'react';
import { FeaturedPosts, Hero, RecentPosts } from '../components/home/index';
import Layout from '../components/Layout';

type IHeroQueryData = IGastbyQueryData<{ image: IGastbyImage }>;

interface IHomePageTemplateProps {
  heroImg: IGastbyImage;
}

const mockFeaturedPostsData = [
  {
    description:
      'Two of The Netherland’s most iconic products in one place, Brouwerij ’t IJ is a modern beer brewery that is located next to a windmill. At the brewery you can try all of their tasty organic blonde and dark beers. It’s always lively inside and outside where people are enjoying a beer and some small bites outside at the picnic tables. And for those interested in the brewing process, on the weekends they offer tours in Dutch and English for just over the price of a beer.',
    id: '1',
    imageSrc:
      'https://otg.imgix.net/assets/grid/amsterdam/oosterpark-plantage/brouwerij-t-ij/brouwerijt-outside.jpg?auto=format%2Ccompress&crop=focalpoint&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&ixlib=php-1.1.0&q=80&w=1200&s=173a46c19faf36bbb9c69cab528dc1d3',
    title: "Brouwerij 't ij",
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
      <div className="center">
        <RecentPosts posts={mockRecentPosts} />
      </div>
    </div>
  );
};

const IndexPage: React.SFC<IHeroQueryData> = ({ data }) => {
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
