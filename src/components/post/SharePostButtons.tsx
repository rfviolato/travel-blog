import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  text-align: left;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #eee;
  width: 50px;
  height: 50px;
  transition: transform 200ms ease;

  &:not(:first-of-type) {
    margin-left: 8px;
  }

  &:hover {
    transform: rotate(2deg) scale(1.1);
  }
`;

const ButtonIcon = styled(FontAwesomeIcon)`
  font-size: 23px;
  color: #484848;
`;

const SharePostButtons: React.SFC = () => (
  <Container>
    <span>Share:</span>
    <ButtonsWrapper>
      <Button>
        <ButtonIcon
          className="SharePostButtons__button-icon"
          icon={faFacebookSquare}
        />
      </Button>

      <Button>
        <ButtonIcon
          className="SharePostButtons__button-icon"
          icon={faInstagram}
        />
      </Button>
    </ButtonsWrapper>
  </Container>
);

export default SharePostButtons;
