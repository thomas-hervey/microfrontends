import { dirname, join } from "path";
const path = require('path');
module.exports = {
  stories: [{
    directory: '../../acme-design-system/src/**',
    files: '*.stories.*',
    titlePrefix: 'Design System'
  }],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-styling")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  async viteFinal(config, {
    configType
  }) {
    // customize the Vite config here
    return config;
  },
  docs: {
    autodocs: true
  }
};
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}