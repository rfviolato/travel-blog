// tslint:disable: no-var-requires
import React from 'react';
const logo = require('./../img/logo.svg');
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';

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
    color: #dfdfdf; /* FIXME: Once bulma globals are overriden/removed, erase this line. */
    opacity: 0.7;
  }
`;

const Navbar: React.SFC = () => {
  return (
    <Container>
      <Link to="/" title="Logo">
        <Logo src={logo} alt="Logo" />
      </Link>
      <LinksWrapper>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact/examples">Book Tickets</Link>
      </LinksWrapper>
    </Container>
  );
};

export default Navbar;
