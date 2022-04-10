import React, { FC } from 'react';
import {
  RiGithubFill,
  RiMailOpenFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { Link, LinkProps } from '@ui/custom-link';

export const socialIcons = {
  twitter: RiTwitterFill,
  github: RiGithubFill,
  mail: RiMailOpenFill,
};

export const Social: FC<Pick<LinkProps, 'label' | 'href'>> = ({
  label,
  href,
}) => {
  const Icon =
    socialIcons[label.toLowerCase() as keyof typeof socialIcons];
  return (
    <Link asButton external href={href} label={label}>
      <Icon aria-hidden="true" />
    </Link>
  );
};
