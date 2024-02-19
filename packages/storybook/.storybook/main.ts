module.exports = {
  stories: [
    {
      directory: '../../design-system/src/**',
      files: '*.stories.*',
      titlePrefix: 'Design System',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/preset-typescript',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-jest',
    'storybook-addon-swc'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config: any, { configType }: any) {
    // customize the Vite config here
    return config
  },

  // TODO: Determine if we need this config. It was used for TailwindCSS and PostCSS
  // webpackFinal: async (config) => {
  //   // Add a rule for processing CSS files using PostCSS, Tailwind CSS, and Autoprefixer.
  //   config.module?.rules?.push({
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           postcssOptions: {
  //             plugins: [require('tailwindcss').default, require('autoprefixer')]
  //           }
  //         }
  //       }
  //     ],
  //     include: path.resolve(__dirname, '../')
  //   })
  //   return config
  // }

}
