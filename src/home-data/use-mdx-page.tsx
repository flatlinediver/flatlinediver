import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import styled from 'styled-components';
import Image from 'next/image';
import { HomeWrapper } from '@ui/homeWrapper';
import { TagPrefix } from '@ui/tag-prefix';
import { Social, socialIcons } from '@ui/social';
import { Link } from '@ui/custom-link';

const isBanner = (children: React.ReactNode) => {
  const firstChild = React.Children.toArray(children)[0];
  if (
    firstChild !== null &&
    typeof firstChild === 'object' &&
    'props' in firstChild &&
    'src' in firstChild.props &&
    firstChild.props.src === 'public/images/flatlinediver.png'
  ) {
    return true;
  }
};

const ListItem = styled.li`
  list-style: none;
  margin: 0 1rem 0 0;
  display: flex;
  &:last-of-type: {
    margin: 0;
  }
`;

export const globals = {
  _styled: styled,
  _image: Image,
};

export const useMDXPage = (code: string) => {
  const Component = React.useMemo(
    () => getMDXComponent(code, globals),
    [code]
  );

  return {
    Component: () => (
      <Component
        components={{
          wrapper: ({ children }) => (
            <HomeWrapper>{children}</HomeWrapper>
          ),
          h1: ({ children }) => (
            <h1>
              <TagPrefix tag="h1" />
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2>
              <TagPrefix tag="h2" />
              {children}
            </h2>
          ),
          ul: ({ children }) => (
            <ul style={{ display: `flex` }}>
              <TagPrefix tag="ul" />
              {children}
            </ul>
          ),
          li: ({ children }) => (
            <ListItem style={{ display: `flex` }}>
              {children}
            </ListItem>
          ),
          p: ({ children }) => {
            if (isBanner(children)) {
              return <></>;
            }

            return (
              <p>
                <TagPrefix tag="p" />
                {children}
              </p>
            );
          },
          a: ({ children, ...props }) => {
            if (
              typeof children === 'string' &&
              children in socialIcons
            ) {
              return (
                <Social
                  href={props.href ?? ''}
                  label={typeof children === 'string' ? children : ''}
                />
              );
            }
            return (
              <Link
                href={props.href ?? ''}
                label={typeof children === 'string' ? children : ''}
              >
                {children}
              </Link>
            );
          },
        }}
      />
    ),
  };
};
