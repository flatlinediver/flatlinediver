import React, { FC } from 'react';
import { ExternalLink } from './external-link';
import { IconLink } from './icon-link';

export const Links: FC = () => (
  <dl>
    <div>
      <dt>twitter</dt>
      <dd>
        <ExternalLink href={`https://twitter.com/flatlinediver`} label={`Twitter`}>
          https://twitter.com/flatlinediver <IconLink />
        </ExternalLink>
      </dd>
    </div>
    <div>
      <dt>github</dt>
      <dd>
        <ExternalLink href={`http://github.com/flatlinediver`} label={`Github`}>
          http://github.com/flatlinediver <IconLink />
        </ExternalLink>
      </dd>
    </div>
    <div>
      <dt>email</dt>
      <dd>
        <ExternalLink href={`mailto:contact@flatlinediver.com`} label={`Mail`}>
          contact@flatlinediver.com <IconLink />
        </ExternalLink>
      </dd>
    </div>
  </dl>
);
