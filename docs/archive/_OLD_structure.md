# Overview

This document describes the structure of the project.

# Project Files

## Configuration Files

### package.json

```
"scripts": {
  dev": "prisma generate && next dev", // Starts the development server with Prisma generation and Next.js.
  "build": "prisma generate && prisma db push && next build", // Generates Prisma client, pushes database changes, and builds the Next.js application.
  "format:write": "prettier --write \"**/*.{css,js,json,jsx,ts,tsx}\"", // Automatically formats code files (CSS, JS, JSON, JSX, TS, TSX) and overwrites them.
  "format": "prettier \"**/*.{css,js,json,jsx,ts,tsx}\"", // Checks code files for formatting issues (CSS, JS, JSON, JSX, TS, TSX) without modifying them.
  "start": "next start", // Starts the Next.js application in production mode.
  "lint": "next lint", // Lints the Next.js application code using ESLint.
  "storybook": "storybook dev -p 6006", // Starts Storybook development server on port 6006.
  "build-storybook": "storybook build", // Builds the Storybook application.
  "test": "jest", // Runs Jest tests.
  "test:generate-output": "jest --json --outputFile=.jest-test-results.json", // Runs Jest tests and generates test results in JSON format.
  "test-storybook": "test-storybook", // Runs Storybook tests.
  "test-storybook:watch": "test-storybook --watch", // Runs Storybook tests in watch mode.
  "test-storybook:coverage": "test-storybook --coverage", // Runs Storybook tests with coverage reporting.
  "test-storybook:snapshot": "npm test Storyshots.test.ts", // Runs Jest tests for Storyshots.
  "chromatic": "dotenv -e .env npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN", // Runs Chromatic tests using environment variables.
  "coverage": "nyc npm run test" // Runs code coverage analysis using NYC and Jest.
}

```

### next.config.js

- `reactStrictMode: true` This enables the React Strict Mode, a way to detect side-effects and deprecated features in the components. It helps in highlighting potential problems in an application and is recommended during development for a more robust application.
- `swcMinify: true` This enables the SWC Compiler for minification. SWC is a super-fast JavaScript/TypeScript compiler, and using it for minification can significantly speed up the build process.`
- `images` This is configuring the domains that are allowed to be optimized by the Next.js Image component.
- `async redirects()` This is used for setting up redirects within the application.

### tailwind.config.js

- It has configured content paths to scan for Tailwind CSS classes: './app/**/\*.{js,ts,jsx,tsx}' and './components/**/\*.{js,ts,jsx,tsx}'.
- It extends the default Tailwind theme, adding custom configurations for fontFamily, animation, and keyframes.
- Several animations and keyframes are defined, such as fade-up, fade-down, slide-up-fade, and slide-down-fade.
- It includes Tailwind CSS plugins for forms and typography.
- There is a custom plugin that adds variants for radix-side-top and radix-side-bottom, presumably related to the Radix UI library.
