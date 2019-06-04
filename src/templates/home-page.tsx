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
    description:
      'Já dizia Alberto Caeiro, um dos heterônimos de Fernando Pessoa: "Pelo Tejo vai-se para o mundo". E foi assim que os portugueses chegaram até nós. Agora, é nossa vez de voltar às terras portuguesas, seja pelas águas do rio Tejo, que corta Lisboa e confere a ela uma paisagem toda especial, ou por...',
    id: '1',
    imageSrc:
      'https://lh3.googleusercontent.com/fzfulqg2OFOajGRUXexEj70ND02xk18rldjIkz_HdHTBZgptDxxyO1cyxRIDI3W2UUz656Fye-jGQy25OviBpCDYok187F31u3I_WKlOb5kYNurHl7_XLfyMHWfGLgmMzKIDwek1vLeGmpr4M7llgzN0u1caqQiwngZ3V1ttmBovSjM-cYdg8kv42HKGjKQQcXO18AYndNHRrO4nXmWHAiss5OFj_6XiD-xIM-gYYGHk-I33frA1ShuIqMpqqfTDJB1XNa2hilW0tPcLUVFcvfpgny2fT_keZDHExcNAlgbs4OuBC6oA40iGlFUgc4CqpOFvuqSFE_uCQSzG6HZVtQ1FfmzRlP6zA3_QeIcrId1k12KgT8iBbP6OZMpKOAa5pRNYobF-cvUORYQWaHuyjH8bA46Mzsp5-CpLHrRY0SYJSil0OS-j8AgjOMOW7ZQtBOeyNb8DBbGgLPcDRh9YmjHi2SpCl8z6RHJWhckt5oG0rHU1L3_cUbHDGjgG0FE8aEfMjXooXrVOx6zYyKai87g96Lg-8QUCETgZ3m9M1nuJedjVC9eUSGPSFMYUiRfjoNfx4dqFtQ9WiOftnvnCU46q4Bu_ud82Ms6n7NUz6z9SPuB-70b2rkpirnx9v5c-i1bNTHsjOQAUfhxfVkEfIJIEXFWTViGdt5qb4kJOrWa6WJxEXFyGXUnI8pYPg8Psyo-4NQefI-3Z9qNpvSXkUxsD=w2444-h1832-no',
    title: 'Lisboa'
  },
  {
    description:
      'Situada às margens do Rio Douro, a aproximadamente 300 km da capital Lisboa, a cidade do Porto encanta logo no primeiro dia. Seja por chegar e dar de cara com o centro histórico que é declarado Patrimônio Mundial pela Unesco ou então por se encantar à primeira vista com o Rio Douro que margeia boa parte da cidade.',
    id: '2',
    imageSrc:
      'https://lh3.googleusercontent.com/75CSmVgiCXUOCn1nJKOy7oRL4LFEhxJr1l6yLBfJ_ULj-s1JvlxXNsGbHlcU3w-ZrAz-kg9L9WLWFKl2l67AwKIGInxPuLIwzmShL594_h3Awu5Fl9g4pRpjZpvMtG6yLGCRCttlDEqaTi-d7exdkNY-rxvu9aA9REYCODOUAw9EeWgP63-PXR5BWen_5iNOqrPt_L-Rb2oMsYgRr0QCFSt5skJNmFRstVC3t492aKYN92NutVNPAhZ41mRgV7_2JaFCmOKPIIYWMuxeTgmWBRXU_M02Mx_E7cE9gMzu-tWvPGPilEwZbb9hTrcqqwfIXQFVKzzPGM-w1KejsZjpnKQsixeDAdihmoL8Roespa5iNW88A5AR6YnGqFeIyrVQNqRFTHhsRlH2kJuJgv1OndOPMUL5lq9iyfqfdsIrBI-qNSsADqgukSMF2RyY6ZckWiVl77UwoL-p38P1NhFNBKR8t-RdlqN28b5NiWjWG-NSZEOx8jwhmAPk0API30NVpuyB3oJf8Gy5kzV4gt1ClBttc-YwrFxmVs73XQ_mDfXR8SLSk6JKH5sJcU2gXHSjr847an5IC_jFUCLzRzGx48fJfSaiWZE3xI0FPTauoQrEZK2v4XoZ0mfwoeufnVfWi2c5I8Hx8jFoHuFmwOSQpAmWcs-lVgAhDwXRvJ8LufUD0P2RPPZiL_7KZxj85GYDQQUtcKAzHU2MP3qNRHzlBY9r=w977-h733-no',
    title: 'Porto'
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
