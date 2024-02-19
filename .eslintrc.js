module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config`
  extends: ['@repo/eslint-config'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
