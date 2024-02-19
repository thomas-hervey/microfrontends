module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@repo/design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    './node_modules/@repo/design-system/**/*.js',
    './node_modules/@repo/pages/**/*.js',
  ],
}
