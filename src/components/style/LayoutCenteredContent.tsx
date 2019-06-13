import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface ILayoutCenteredContentProps {
  children: ReactNode;
}

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1400px;
`;

const LayoutCenteredContent: React.SFC<ILayoutCenteredContentProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};

export default LayoutCenteredContent;
