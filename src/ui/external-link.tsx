import Link, { LinkProps } from 'next/link';
import React, { FC } from 'react';

export const ExternalLink: FC<LinkProps & { label: string }> = ({ label, children, ...props }) => (
  <Link {...props}>
    <a target={`_blank`} rel={`noreferrer`} aria-label={`${label} (opens in new window)`}>
      {children}
    </a>
  </Link>
);
