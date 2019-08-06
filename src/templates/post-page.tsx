import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTags } from '@fortawesome/pro-light-svg-icons';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
  Blockquote,
  Image,
  SharePostButtons,
  PostAuthor,
} from './../components/post';
import Layout from './../components/Layout';

interface IPostProps {
  date: string;
  title: string;
  description: string;
  tags: string;
  featuredImage: IGatsbySharImageQueryResult;
}

type IPostTemplateProps = IGastbyQueryData<IPostProps>;

interface IHeroImageProps {
  src: string;
}

const MEDIA_QUERY_SIZES = {
  M: '600px',
};

const Title = styled.h1`
  margin-top: 10px;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    margin-top: 17px;
    font-size: 40px;
    margin-bottom: 10px;
    line-height: 1em;
  }
`;

const Container = styled.article`
  margin-bottom: 80px;
`;

const Description = styled.div`
  margin-top: 30px;
  font-size: 16px;
`;

const Paragraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.8;
  margin-left: 3px;
  margin-bottom: 30px;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MetadataInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  &:not(:first-of-type) {
    margin-left: 28px;
  }

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    &:not(:first-of-type) {
      margin-left: 0;
      margin-top: 6px;
    }
  }
`;

const MetadataInfoText = styled.div`
  margin-left: 7px;
  transform: translateY(1px);
`;

const SharePostButtonsWrapper = styled.div`
  margin-top: 60px;
`;

const PostAuthorWrapper = styled.div`
  margin-top: 40px;
`;

interface IDummyContentProps {
  children: string;
}

const DummyContent: React.SFC<IDummyContentProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Paragraph>
        Start your day by renting a bike from Macbike Central Station (discount
        with your I amsterdam City Card) and taking a short ferry ride across
        the IJ River (GVB ferry 901/902, behind Amsterdam Central Station, free)
        to Noordelijke IJ oever, a hip area full of art galleries, interesting
        architecture, and great waterside terraces.
      </Paragraph>
      <Paragraph>
        Check out the EYE Filmmuseum (free with your I amsterdam City Card), to
        catch a movie or see an exhibition about cinematic history. The EYE’s
        waterside terrace also offers an amazing view across the IJ, where you
        can watch the boats and ships go by.
      </Paragraph>
      <Paragraph>
        Start your day by renting a bike from Macbike Central Station (discount
        with your I amsterdam City Card) and taking a short ferry ride across
        the IJ River (GVB ferry 901/902, behind Amsterdam Central Station, free)
        to Noordelijke IJ oever, a hip area full of art galleries, interesting
        architecture, and great waterside terraces. Check out the EYE Filmmuseum
        (free with your I amsterdam City Card), to catch a movie or see an
        exhibition about cinematic history.
      </Paragraph>
      <Image
        src="https://images.unsplash.com/photo-1458242462449-7b6697b7caef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
        caption="Beautiful, toch?"
      />
      <Paragraph>
        Right next to the EYE is the iconic A'DAM Tower. Those without a fear of
        heights should head up the 22 floors to the Lookout which provides
        spectacular 360-degree views of Amsterdam’s historic centre, the
        harbour, and even the polders on the outskirts of the city. True
        thrill-seekers can take a ride on Europe’s highest swing (hold on
        tight!).
      </Paragraph>
      <Paragraph>
        After exploring the charms of Amsterdam Noord, hop on your bike and head
        up towards the green countryside and traditional villages of Old
        Holland. Follow cycling junctions 40 and 41 to the undiscovered Broek in
        Waterland and enjoy the scenery of this quiet and picturesque village.
        Stop for a drink on a terrace or walk around the quiet streets. Stop by
        the tourism office i-point (Kerkplein 13) to pick up a free map that
        includes cycling routes, activities, and rest points, indicating farms
        where you can stop for a refreshing drink along the way.
      </Paragraph>
      <Blockquote>
        Something really important about this post is quoted here
      </Blockquote>
      <Paragraph>
        Following the excitement, relax and refuel at one of the many waterside
        cafés such as Café De Pont, Café-restaurant THT, or the EYE, or head
        over to NDSM Wharf for some more exploring. This former shipyard is a
        cultural hotspot that regularly hosts festivals and other events.
      </Paragraph>
      <Paragraph>
        If you’re up for it, take the Volendam-Marken express, which ferries
        between the two villages (free with your I amsterdam city card) to
        Volendam, where you can visit the Volendams Museum to learn more about
        Dutch life in the 17th century (free with your I amsterdam City Card).
        Stop at one of the harbourside restaurants that offer discounts with the
        City Card such as Havenrestaurant de Lunch or Restaurant van den Hogen
        in Volendam, and Café-Restaurant Land en Zeezicht or Taverne de Visscher
        in Marken.
      </Paragraph>
    </React.Fragment>
  );
};

const post = {
  id: '1',
  title: 'City of bikes',
  content:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt hic, consequuntur numquam aliquid illo quam voluptas totam, magnam quo doloribus vitae odit perferendis. Dignissimos, nostrum? Temporibus iusto facilis ab! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore deserunt hic, consequuntur numquam aliquid illo quam voluptas totam, magnam quo doloribus vitae odit perferendis. Dignissimos, nostrum? Temporibus iusto facilis ab!',
  imageUrl:
    'https://images.unsplash.com/photo-1468436385273-8abca6dfd8d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1894&q=80',
  createdAt: new Date(),
};

const PostTemplate: React.SFC<IPostTemplateProps> = ({
  data: { markdownRemark },
}) => {
  const {
    frontmatter: { date, title, featuredImage },
    html: __html, //TODO: Find out how to type this.
  } = markdownRemark;
  console.log({ markdownRemark });

  return (
    <Layout solidHeader={true}>
      <Container>
        <section>
          <Img fluid={featuredImage.childImageSharp.fluid} />

          <div className="center">
            <Title>{title}</Title>
            <Metadata>
              <MetadataInfo>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <MetadataInfoText>{date}</MetadataInfoText>
              </MetadataInfo>
              <MetadataInfo>
                <FontAwesomeIcon icon={faTags} />
                <MetadataInfoText>
                  Travel, Amsterdam, Euro-travel
                </MetadataInfoText>
              </MetadataInfo>
            </Metadata>

            <Description dangerouslySetInnerHTML={{ __html }} />

            <SharePostButtonsWrapper>
              <SharePostButtons />
            </SharePostButtonsWrapper>

            <PostAuthorWrapper>
              <PostAuthor />
            </PostAuthorWrapper>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredImage {
          childImageSharp {
            fluid(maxHeight: 550, maxWidth: 1400, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;
