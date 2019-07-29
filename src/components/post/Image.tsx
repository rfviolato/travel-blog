import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface IImageProps {
  caption?: string;
  src: string;
  mode?: string;
}

const MEDIA_QUERY_SIZES = {
  L: '800px',
};

const rightOptionStyle = css`
  float: right;
  margin-bottom: 15px;
  margin-left: 15px;

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    float: initial;
    margin-left: 0;
  }
`;

const leftOptionStyle = css`
  float: left;
  margin-bottom: 15px;
  margin-right: 15px;

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    float: initial;
    margin-right: 0;
  }
`;

const fullOptionStyle = css`
  width: 100%;
  margin-bottom: 15px;
`;

const Img = styled.img`
  width: 500px;
  height: 350px;
  border-radius: 2px;

  @media (max-width: ${MEDIA_QUERY_SIZES.L}) {
    width: 100%;
    height: 60vw;
  }
`;

const Caption = styled.figcaption`
  font-size: 0.95em;
  opacity: 0.8;
  margin-left: 5px;
`;

class Image extends Component<IImageProps> {
  static options = {
    left: 'LEFT',
    right: 'RIGHT',
    full: 'FULL',
  };

  getImageModeStyle(mode: IImageProps['mode']) {
    switch (mode) {
      case Image.options.right:
        return rightOptionStyle;

      case Image.options.full:
        return fullOptionStyle;

      default:
        return leftOptionStyle;
    }
  }

  render() {
    const { caption, src, mode } = this.props;

    return (
      <figure css={this.getImageModeStyle(mode)}>
        <Img src={src} /> {/* TODO: Use gatsby image once this is dynamic */}
        {caption && <Caption>{caption}</Caption>}
      </figure>
    );
  }
}

export default Image;
