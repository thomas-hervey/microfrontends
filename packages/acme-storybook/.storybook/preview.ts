import '@vercel/examples-ui/globals.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;


// TODO: Determine if/when we want these preview utilities. They were ported over from my other configuration.
// import type { Preview } from '@storybook/react'

// const preview: Preview = {
//   parameters: {
//     // Configure actions addon to match action names starting with "on" (e.g., onClick).
//     actions: { argTypesRegex: '^on[A-Z].*' },

//     // Configure controls addon to provide control for color and date inputs.
//     controls: {
//       matchers: {
//         color: /(background|color)$/i, // Match color-related inputs.
//         date: /Date$/ // Match date-related inputs.
//       }
//     }
//   }
// }

// export default preview
