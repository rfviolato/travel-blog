// tslint:disable: no-var-requires
import React, { useState, useCallback } from 'react';
const logo = require('./../img/logo.svg');
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons';
import posed, { PoseGroup } from 'react-pose';

interface INavbarProps {
  isSolid?: boolean;
}

interface IMobileLinkAnimationProps {
  index: number;
  delayValues: number[];
}

const MEDIA_QUERY_SIZES = {
  M: '700px',
};
const SIDE_PADDING = '10vw';
const MOBILE_ABSOLUTE_ELEMENT_TOP = '34px';
const EASE_OUT_CUBIC = [0.215, 0.61, 0.355, 1];
const STAGGER_ANIMATION_BASE_DELAY = 50;
const HEADER_TRANSITION = {
  duration: 500,
  ease: EASE_OUT_CUBIC,
};
const HEADER_DEFAULT_ANIMATION_DELAY = 200;

const ContainerAnimation = posed.header({
  default: {
    height: '95px',
    transition: {
      ...HEADER_TRANSITION,
      duration: HEADER_TRANSITION.duration / 1.5,
    },
    delay: HEADER_DEFAULT_ANIMATION_DELAY,
  },
  expanded: {
    height: '360px',
    transition: HEADER_TRANSITION,
  },
});

const Container = styled(ContainerAnimation)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.325);
  padding: 0 ${SIDE_PADDING};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const solidContainerStyle = css`
  position: relative;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0.15);
`;

const LogoAnimation = posed.span({
  enter: {
    opacity: 1,
    x: 0,
    transition: HEADER_TRANSITION,
    delay: HEADER_DEFAULT_ANIMATION_DELAY,
  },
  exit: {
    opacity: 0,
    x: -5,
    transition: HEADER_TRANSITION,
  },
});

const LogoWrapper = styled(LogoAnimation)`
  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    position: absolute;
    top: ${MOBILE_ABSOLUTE_ELEMENT_TOP};
    left: ${SIDE_PADDING};
  }
`;

const Logo = styled.img`
  width: 100px;
`;

const LinksWrapper = styled.nav`
  display: flex;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: ${MOBILE_ABSOLUTE_ELEMENT_TOP};
  right: ${SIDE_PADDING};
  display: none;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    display: flex;
  }
`;

const MobileLinksWrapper = styled.nav`
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const MobileMenuButton = styled.button`
  color: #dfdfdf;
`;

const solidMobileMenuButtonStyle = css`
  color: #484848;
`;

const MobileMenuButtonIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
`;

const menuButtonCloseIconStyle = css`
  font-size: 30px;
`;

const BASE_ENTER_DELAY = HEADER_TRANSITION.duration / 3;
const MobileLinkAnimation = posed(GatsbyLink)({
  enter: {
    opacity: 1,
    x: 0,
    transition: HEADER_TRANSITION,
    delay: ({ index, delayValues }: IMobileLinkAnimationProps) =>
      BASE_ENTER_DELAY + delayValues[index],
  },
  exit: {
    opacity: 0,
    x: 5,
    transition: {
      ...HEADER_TRANSITION,
      duration: HEADER_TRANSITION.duration / 4,
    },
    delay: ({ index, delayValues }: IMobileLinkAnimationProps) =>
      [...delayValues].reverse()[index],
  },
});

const MobileLink = styled(MobileLinkAnimation)`
  font-size: 40px;
  line-height: 1.1em;
  color: #dfdfdf;

  @media (max-width: ${MEDIA_QUERY_SIZES.M}) {
    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }
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

const solidLinkStyle = css`
  color: #484848;

  &:hover {
    color: #484848; /* TODO: Once bulma globals are overriden/removed, erase this line. */
  }
`;

const Navbar: React.SFC<INavbarProps> = ({ isSolid }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const toggleMenu = useCallback(() => setMenuActive((active) => !active), []);

  // TODO: Once the number of links will probably come from the API, do this dynamically
  const DELAYS = [
    0,
    STAGGER_ANIMATION_BASE_DELAY,
    STAGGER_ANIMATION_BASE_DELAY * 2,
    STAGGER_ANIMATION_BASE_DELAY * 3,
  ];

  return (
    <Container
      pose={isMenuActive ? 'expanded' : 'default'}
      css={isSolid && solidContainerStyle}
    >
      <PoseGroup flipMove={false}>
        {!isMenuActive && (
          <LogoWrapper key="logo-animation">
            <GatsbyLink to="/" title="Logo">
              <Logo src={logo} alt="Logo" />
            </GatsbyLink>
          </LogoWrapper>
        )}
      </PoseGroup>

      <LinksWrapper>
        <Link css={isSolid && solidLinkStyle} to="/about">
          About
        </Link>
        <Link css={isSolid && solidLinkStyle} to="/blog">
          Blog
        </Link>
        <Link css={isSolid && solidLinkStyle} to="/contact">
          Contact
        </Link>
        <Link css={isSolid && solidLinkStyle} to="/contact/examples">
          Book Tickets
        </Link>
      </LinksWrapper>

      <MobileMenu>
        <MobileLinksWrapper>
          <PoseGroup delayValues={DELAYS} flipMove={false}>
            {isMenuActive && [
              <MobileLink
                key="about-link"
                css={isSolid && solidLinkStyle}
                to="/about"
                index={0}
              >
                About
              </MobileLink>,
              <MobileLink
                key="blog-link"
                css={isSolid && solidLinkStyle}
                to="/blog"
                index={1}
              >
                Blog
              </MobileLink>,
              <MobileLink
                key="contact-link"
                css={isSolid && solidLinkStyle}
                to="/contact"
                index={2}
              >
                Contact
              </MobileLink>,
              <MobileLink
                key="tickets-link"
                css={isSolid && solidLinkStyle}
                to="/contact/examples"
                index={3}
              >
                Book Tickets
              </MobileLink>,
            ]}
          </PoseGroup>
        </MobileLinksWrapper>

        <MobileMenuButton
          onClick={toggleMenu}
          css={isSolid && solidMobileMenuButtonStyle}
        >
          {isMenuActive ? (
            <MobileMenuButtonIcon
              css={menuButtonCloseIconStyle}
              icon={faTimes}
            />
          ) : (
            <MobileMenuButtonIcon icon={faBars} />
          )}
        </MobileMenuButton>
      </MobileMenu>
    </Container>
  );
};

export default Navbar;
