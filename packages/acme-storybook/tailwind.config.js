module.exports = {
  presets: [
    require('@vercel/examples-ui/tailwind'),
    require('@repo/acme-design-system/tailwind'),
  ],
  content: [
    // All the packages that might include stories
    './node_modules/@vercel/examples-ui/**/*.js',
    './node_modules/@repo/acme-design-system/**/*.js',
    './node_modules/@repo/acme-pages/**/*.js',
  ],
}
