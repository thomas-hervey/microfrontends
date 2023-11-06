module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('../acme-design-system/src/tailwind.cjs'),

    // NOTE: Using workspace dependencies should work, but it doesn't
    // require('@acme/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    '../acme-design-system/**/*.js',
    '../acme-pages/**/*.js',

    // NOTE: Using workspace dependencies should work, but it doesn't
    // './node_modules/@acme/design-system/**/*.js',
    // './node_modules/@acme/pages/**/*.js',
  ],
}
