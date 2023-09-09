import type { StorybookConfig } from '@storybook/react-webpack5';

const config: any = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/**/*.story.[tj]sx'],
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
