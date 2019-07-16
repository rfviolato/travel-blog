import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from './Footer';
import useSiteMetadata from './SiteMetadata';
import GlobalStyles from './style/GlobalStyles';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import './all.sass';

// TODO: Abstract the values below to their owner's files.
const FOOTER_HEIGHT = '482px';

const ChildrenWrapper = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT});
`;

interface ITemplateWrapperProps {
  children: ReactNode;
  solidHeader?: boolean;
}

const TemplateWrapper: React.SFC<ITemplateWrapperProps> = ({
  children,
  solidHeader,
}) => {
  const { title, description } = useSiteMetadata();

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <GlobalStyles />

      <Navbar isSolid={solidHeader} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default TemplateWrapper;
