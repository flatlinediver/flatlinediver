import React, { FC } from 'react';
import styled from 'styled-components';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { StyledLinkProps, linkStyles } from '@styles/common-styles';

const StyledLink = styled.a<StyledLinkProps>`
  ${({ color, asButton }) => linkStyles({ color, asButton })};
`;

interface LinkProps extends NextLinkProps, StyledLinkProps {
  label: string;
  external?: boolean;
}

export const Link: FC<LinkProps> = ({ label, external, children, asButton, color, ...rest }) => {
  const additionalProps = external
    ? {
        target: `_blank`,
        rel: `noreferrer`,
        'aria-label': `${label} (opens in new window)`,
      }
    : { 'aria-label': `${label}` };

  return (
    <NextLink {...rest}>
      <StyledLink {...additionalProps} asButton={asButton} color={color}>
        {children}
      </StyledLink>
    </NextLink>
  );
};
