// tslint:disable: no-var-requires
import React from 'react';
const logo = require('./../img/logo.svg');
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

interface INavbarProps {
  isSolid: boolean | undefined;
}

const Container = styled.header`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 95px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.325);
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const solidContainerStyle = css`
  position: relative;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0.15);
`;

const Logo = styled.img`
  width: 100px;
`;

const LinksWrapper = styled.nav`
  display: flex;
`;

const Link = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #dfdfdf;
  margin-right: 15px;
  transition: opacity 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 1;

  &:hover {
    color: #dfdfdf; /* TODO: Once bulma globals are overriden/removed, erase this line. */
    opacity: 0.7;
  }
`;
const solidContainerLinkStyle = css`
  color: #484848;

  &:hover {
    color: #484848; /* TODO: Once bulma globals are overriden/removed, erase this line. */
  }
`;

const Navbar: React.SFC<INavbarProps> = ({ isSolid }) => {
  return (
    <Container css={isSolid && solidContainerStyle}>
      <Link to="/" title="Logo">
        <Logo src={logo} alt="Logo" />
      </Link>
      <LinksWrapper>
        <Link css={isSolid && solidContainerLinkStyle} to="/about">
          About
        </Link>
        <Link css={isSolid && solidContainerLinkStyle} to="/blog">
          Blog
        </Link>
        <Link css={isSolid && solidContainerLinkStyle} to="/contact">
          Contact
        </Link>
        <Link css={isSolid && solidContainerLinkStyle} to="/contact/examples">
          Book Tickets
        </Link>
      </LinksWrapper>
    </Container>
  );
};

export default Navbar;
