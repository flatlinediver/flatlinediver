import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react';

export const CustomLink: FC<LinkProps & { label: string; external?: boolean }> = ({
  label,
  external,
  children,
  ...props
}) => {
  const additionalProps = external
    ? {
        target: `_blank`,
        rel: `noreferrer`,
        'aria-label': `${label} (opens in new window)`,
      }
    : {};

  return (
    <Link {...props}>
      <a target={`_blank`} rel={`noreferrer`} {...additionalProps}>
        {children}
      </a>
    </Link>
  );
};
