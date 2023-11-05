module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    // require('@acme/design-system/tailwind'),
    require('../acme-design-system/src/tailwind.cjs'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    // './node_modules/@acme/design-system/**/*.js',

    // './node_modules/@acme/pages/**/*.js',

    '../acme-design-system/**/*.js',
    '../acme-pages/**/*.js',
  ],
}
