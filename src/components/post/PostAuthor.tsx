import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const AVATAR_SIZE = '80px';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  flex: 0 0 auto;
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
`;

const AvatarImage = styled.img`
  border-radius: 50%;
`;

const Info = styled.div`
  margin-left: 20px;
`;

const Name = styled.div`
  font-size: 20px;
  color: #ff4400;
  font-weight: 700;
`;

const Bio = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const PostAuthor: React.SFC = () => (
  <Container>
    <Avatar>
      <AvatarImage
        width={AVATAR_SIZE}
        height={AVATAR_SIZE}
        src={require('./../../../static/img/dummy_avatar.png')}
        alt=""
      />
    </Avatar>

    <Info>
      <Name>Rebeca Fiamozzini</Name>
      <Bio>
        Olar! Sou a Rebeca, casada com o incrível Rafael, mãe do Ted e Barney{' '}
        <span>😻</span>, fã de Sandy e Júnior e amo tomar um bom Aperol Spritz.
        Moro em Amsterdam - Holanda e adoro compartilhar as coisas muito loucas
        que vejo por aqui! Ainda pegando a manha de andar de bike no meio desse
        mar de bicicletas 😅
      </Bio>
    </Info>
  </Container>
);

export default PostAuthor;
