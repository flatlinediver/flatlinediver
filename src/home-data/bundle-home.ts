import path from 'path';
import { bundleMDX as bundle } from 'mdx-bundler';
import { sectionizeByHR } from '@home-data/sectionize-by-hr';

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
        sectionizeByHR,
      ];

      return options;
    },
  });

  return { code };
};
