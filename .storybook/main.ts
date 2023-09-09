import type { StorybookConfig } from '@storybook/react-webpack5';
// import { readdirSync } from 'fs';
// import path from 'path';

const config: any = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.story.[tj]sx'],
  //[
  //   ...readdirSync(path.resolve(__dirname, '../src/'), { withFileTypes: true })
  //       .filter((dirent) => dirent.isDirectory())
  //       .map(readdirSync(path.resolve(__dirname, `../src/${dirent.name}`, { withFileTypes: true })))
  //       .filter((dirent) => { console.log(dirent); return dirent.name !== 'to_ignore'})
  //       .map(
  //           (dirent) =>
  //               `${dirent.name}/**/*.story.@(js|jsx|ts|tsx|mdx)`
  //       )
  // ], // ,
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { actions: false } },
    '@storybook/addon-ie11',
    {
      name: '@storybook/addon-styling',
      options: {
        cssBuildRule: {
          test: /\.(scss|css)$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                  // auto: checkPath,
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        },
      },
    },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: filterHtmlAttributes,
    },
  },
};

/**
 * Функция убирает стандартные html пропсы из docs
 * https://github.com/styleguidist/react-docgen-typescript
 */
function filterHtmlAttributes(prop, component) {
  if (prop.parent) {
    return !(
      prop.parent.name.includes('DOMAttributes') ||
      prop.parent.fileName.includes('@types/react')
    );
  }

  return true;
}

export default config;
