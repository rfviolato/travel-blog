import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

type IHeroQueryData = IGastbyQueryData<{ image: IGastbyImage }>;

interface IHeroProps {
  heroImg: IGastbyImage;
}

interface IHeroImageProps {
  src: string;
}

const Hero = styled.div<IHeroImageProps>`
  width: 100%;
  height: 100vh;
  background-position: 50% 50%;
  background-image: ${({ src }: IHeroImageProps) => `url(${src})`};
`;

export const HomePageTemplate: React.SFC<IHeroProps> = ({ heroImg }) => {
  const heroSrc = heroImg.childImageSharp
    ? heroImg.childImageSharp.fluid.src
    : 'TODO: img not found src';

  return (
    <div>
      <Hero src={heroSrc} />
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
        quis ligula efficitur, dapibus dolor nec, dignissim magna. Integer
        aliquet vulputate porta. Maecenas elementum nisl nisi, sit amet
        vestibulum lacus vestibulum sed. Ut faucibus turpis et massa euismod, id
        pulvinar nisl bibendum. Pellentesque iaculis lectus at lectus
        condimentum accumsan. Nam mattis sapien eget purus dignissim fermentum.
        Donec iaculis interdum ipsum. Duis sed viverra ante, sit amet efficitur
        felis. Nunc tempor arcu nisl, non ornare diam hendrerit at. Morbi
        eleifend, eros nec porttitor semper, nibh lorem porta metus, eu gravida
        enim tortor sed risus. Suspendisse id sem quis ante pharetra auctor ac
        id lorem. Praesent non lacus feugiat quam tristique ullamcorper.
        Curabitur imperdiet eleifend nibh, vel imperdiet ante. Ut quis nunc
        sapien. Pellentesque nisl dui, accumsan nec sagittis vel, hendrerit non
        enim. Integer vitae luctus orci. Aenean ultricies sed felis auctor
        viverra. Cras ac metus quis nisi finibus vulputate. Integer ac mollis
        magna, vel aliquam velit. Donec ac interdum quam. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Vivamus euismod bibendum dui eget sagittis. Sed a consectetur eros, sed
        iaculis ligula. Phasellus vehicula sem quis pretium vestibulum. Sed
        pulvinar turpis massa, nec dapibus turpis porttitor a. Ut aliquet neque
        a hendrerit ullamcorper. Quisque dictum sollicitudin vehicula. Morbi in
        tellus mattis mauris ultricies ultricies eu ut risus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Fusce dolor elit,
        auctor pellentesque tincidunt vitae, vulputate nec magna. Vivamus
        euismod efficitur sem, vel scelerisque massa tempus sit amet. Ut quis
        accumsan orci. Aenean suscipit feugiat semper. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Etiam blandit tincidunt porta. Aenean aliquet condimentum diam sed
        pulvinar. Nunc posuere, massa sit amet convallis semper, turpis elit
        molestie elit, quis mollis lectus odio et eros. Quisque molestie dolor
        eleifend dolor dapibus mattis. Sed facilisis pellentesque dolor ut
        porttitor. Integer in purus vel arcu porttitor aliquam. Nunc sed porta
        nunc, ac consequat tellus. Mauris finibus mauris ante, eu gravida diam
        tempus non. Vivamus imperdiet ex sed pulvinar suscipit. Nunc iaculis
        tristique nisl, nec mollis sem aliquet ut. Phasellus efficitur est id
        accumsan tempor. Donec porttitor nec lorem id hendrerit. Praesent at
        euismod sapien. Suspendisse potenti. Nulla et magna porttitor, lacinia
        justo eu, accumsan erat. Nunc consequat nisl id consectetur consectetur.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Sed mattis sem sit amet lacinia imperdiet. Pellentesque
        est erat, eleifend sit amet enim quis, commodo tempus enim. Nunc ac sem
        fermentum, accumsan ligula et, elementum velit. Suspendisse sed ex
        dolor. Cras eu lectus imperdiet, dignissim neque sit amet, aliquam eros.
        Integer vel urna sodales, iaculis tellus quis, vulputate libero. Sed
        eget ligula sollicitudin, convallis elit sit amet, tempor mauris. Sed
        faucibus sapien dui, sit amet efficitur sem sagittis at. Phasellus
        cursus lorem sed neque blandit, at finibus nibh sollicitudin. Nam sit
        amet commodo sapien, ac consectetur nunc. Donec gravida sit amet nisl in
        consectetur. Phasellus blandit tortor a lectus pharetra viverra. Vivamus
        elementum, tellus ac pharetra facilisis, sem mi sodales ipsum, nec
        congue dolor sapien nec magna. Nullam porttitor venenatis sem non
        sagittis. Cras consequat a orci et gravida. Aliquam sodales non mauris
        sit amet bibendum. Quisque ut placerat mauris. Pellentesque commodo
        placerat mi, sit amet tempor tortor mollis vitae. Vivamus quis tempor
        mauris. Nam convallis, ex eget interdum iaculis, metus urna vehicula
        purus, at vehicula ante augue nec quam. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Nullam dui
        neque, scelerisque ac dolor nec, suscipit efficitur sem. Cras varius,
        mauris sit amet vulputate rhoncus, sem mauris vulputate ligula, ac
        efficitur nulla odio ac urna. Sed sed elit vestibulum, faucibus magna
        nec, lobortis eros. Sed eu odio non augue commodo vulputate ut sed urna.
        Maecenas vel quam id nunc semper blandit. Nullam vel ex sagittis,
        fermentum libero id, venenatis ligula. Duis eros quam, ultrices et eros
        eu, volutpat suscipit dolor. Vestibulum in luctus arcu. Maecenas at
        congue purus. Aenean nec velit consequat, scelerisque orci sit amet,
        tincidunt magna. Nunc ut metus at diam vehicula ornare ut sit amet
        lorem. Ut ut mi nulla. Nam euismod consequat velit a rutrum. Nam iaculis
        porttitor mollis. Phasellus sed tortor ac tortor pharetra tristique et
        non tellus. Quisque eu lectus felis. Vivamus vitae elit efficitur,
        dictum quam at, convallis lorem. In a efficitur orci. Donec sed lectus
        sollicitudin, pharetra nisl id, euismod ligula. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Sed molestie velit vitae turpis tincidunt, vitae ullamcorper eros
        maximus. Donec tincidunt scelerisque viverra. Fusce vel ipsum sit amet
        lectus lacinia auctor vitae euismod dui. Etiam tincidunt pulvinar
        tincidunt. Praesent a dolor sed lorem sodales laoreet non et arcu. In
        vel odio at lectus aliquet aliquet vitae molestie massa. Morbi a sem
        cursus, vulputate tortor sed, venenatis magna. Nunc a lorem interdum,
        sodales nisl eu, blandit justo. Integer id justo odio. Cras neque metus,
        luctus scelerisque posuere nec, rhoncus finibus ligula. Cras cursus,
        felis a sagittis varius, mi augue rutrum lacus, id bibendum lacus ante
        quis leo. Fusce tempor eu odio id pretium. Etiam pharetra neque a sapien
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
