import path from 'path';
import { bundleMDX as bundle } from 'mdx-bundler';
import { thematicBreakLayout } from '@home-data/thematic-break';
import { paragraph } from '@home-data/paragraph';

export const bundlePage = async (): Promise<{ code: string }> => {
  const { code } = await bundle({
    file: path.join(process.cwd(), 'README.md'),
    esbuildOptions: (options) => ({
      ...options,
      platform: 'node',
      target: ['es6'],
    }),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...thematicBreakLayout,
        ...paragraph,
      ];

      return options;
    },
  });

  return { code };
};
