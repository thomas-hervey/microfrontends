 Microfrontend Architecture
===============================

Overview
--------

The Microfrontend application is a multi-package Next.js-based project that follows the microfrontend architecture pattern. It's designed to be highly modular and allows multiple teams to work independently on different parts of the application.

The application uses [Turbo repo](https://turbo.build/repo), which let's you define the pipeline for building, testing, and deploying a web application with independent apps and packages from a single repository. It's designed to be highly modular and allows multiple teams to work independently on different parts of the application. The application uses a `turbo.json` file to define a build pipeline.

Project Structure
-----------------

The project is structured into two main directories: `apps` and `packages`.

### `/apps`

The `apps` directory contains individual Next.js applications, each serving a specific purpose or functionality. Each app has its own codebase, routes, and dependencies.

#### Examples of Apps:

1. Main App (`main`): This is the main entry point for the application and acts as the container for all microfrontends. It includes the main layout and routing logic.

2. Docs App (`docs`): This app is a clone of the main app and is used to show how microfrontend apps and dropz ones are used together.

### `/packages`

The `packages` directory contains shared packages, libraries, and components that can be used across different apps. These packages are designed to be reusable and follow a decoupled architecture.

#### Examples of Packages:

1. Design System (`acme-design-system`): This package contains shared UI components, styles, and utilities used consistently across all apps for a cohesive user experience.
2. Storybook (`acme-storybook`): This package contains a Storybook instance that can be used to develop and test UI components from the design system in isolation.
3. Utils (`acme-utils`): This package contains utility functions and helper classes that are shared among different parts of the application.
4. Pages (`acme-pages`): This package contains shared pages that can be used across different apps.
5. Eslint Config (`eslint-config-acme`): This package contains a shared ESLint configuration that can be used across different apps and packages.

### `Config Files`
- `package.json`: The package.json file specifies the metadata and dependencies for the project. It also defines scripts for running various tasks.

  <details>
    <summary><b>Code with comments</b></summary>

    ```json
    {
      // Define the URL of the GitHub repository for this project.
      "repository": "https://github.com/thomas-hervey/microfrontends",

      // Specify project author's name and email.
      "author": {
        "name": "Thomas Hervey",
        "email": "thomasahervey@gmail.com"
      },

      // Set the project's initial version.
      "version": "0.1.0",

      // Specify the project's license (MIT in this case).
      "license": "MIT",

      // Indicate that this project is private.
      "private": true,

      // Define workspaces for apps and packages within the monorepo.
      "workspaces": [
        "apps/*",
        "packages/*"
      ],

      // Define custom scripts for various development and build tasks.
      "scripts": {
        // Build the project using Turbo.
        "build": "turbo run build",

        // Build the main project.
        "build:main": "turbo run build --filter=main...",

        // Build project documentation.
        "build:docs": "turbo run build --filter=docs...",

        // Run the development server.
        "dev": "turbo run dev",

        // Start the project.
        "start": "turbo run start",

        // Clean the project by removing build artifacts and dependencies.
        "clean": "turbo run clean && rm -rf node_modules",

        // Lint the project.
        "lint": "turbo run lint",

        // Format project code using Prettier.
        "format": "prettier --write .",

        // Manage changesets.
        "changeset": "changeset",

        // Version packages using changesets.
        "version-packages": "changeset version",

        // Release the project by building and publishing changesets.
        "release": "turbo run build --filter=main... && changeset publish"
      },

      // Define development dependencies.
      "devDependencies": {
        // Changesets CLI for version management.
        "@changesets/cli": "^2.26.2",

        // Type definitions for Node.js.
        "@types/node": "^20.8.3",

        // Code formatter (Prettier).
        "prettier": "^3.0.3",

        // Turbo for managing monorepos.
        "turbo": "^1.10.15"
      },

      // Specify the package manager to use (PNPM version 8.8.0).
      "packageManager": "pnpm@8.8.0"
    }
    ```
</details>

- `turbo.json`: The turbo.json file defines build and development pipeline tasks in a Turbo-based monorepo, specifying task dependencies and outputs. It adheres to a schema validated against https://turborepo.org/schema.json.
  <details>
    <summary><b>Code with comments</b></summary>

    ```json
    {
      // Specify the URL of the Turbo configuration schema.
      "$schema": "https://turborepo.org/schema.json",

      // Define the pipeline of tasks for building and development.
      "pipeline": {
        // Build task: Depends on other build tasks and produces various outputs.
        "build": {
          // Dependencies for this task. '^' indicates running tasks in parallel.
          "dependsOn": ["^build"],

          // List of output directories/files generated by this task.
          "outputs": [
            ".next/**",
            "!.next/cache/**",
            "dist/**",
            "storybook-static/**"
          ]
        },

        // Main build task: Depends on specific build tasks and produces outputs.
        "main#build": {
          // Dependencies for this task.
          "dependsOn": ["^build", "$DOCS_URL"],

          // List of output directories/files generated by this task.
          "outputs": [".next/**", "!.next/cache/**"]
        },

        // Test task: Depends on the main build task.
        "test": {
          "dependsOn": ["^build"],

          // No outputs defined for this task.
          "outputs": []
        },

        // Lint task: No dependencies or outputs defined.
        "lint": {
          "outputs": []
        },

        // Development task: No caching for this task.
        "dev": {
          "cache": false
        },

        // Start task: No caching for this task.
        "start": {
          "cache": false
        },

        // Clean task: No caching for this task.
        "clean": {
          "cache": false
        }
      }
    }
    ```
  </details>

- `tsconfig.json`: The tsconfig.json file specifies the root files and the compiler options required to compile the project. Specifically this project

  <details>
    <summary><b>Code with comments</b></summary>

    ```json
    {
      "compilerOptions": {
        // Specifies the target ECMAScript version for the compiled code.
        "target": "esnext",

        // Specifies the module system for the compiled code.
        "module": "esnext",

        // Provides a list of available library files.
        "lib": ["dom", "dom.iterable", "esnext"],

        // Generates declaration files (`.d.ts`) for TypeScript.
        "declaration": true,

        // Allows importing JavaScript files in TypeScript.
        "allowJs": true,

        // Skips type checking of declaration files from dependency packages.
        "skipLibCheck": true,

        // Enables strict type checking options.
        "strict": true,

        // Enforces consistent casing in file names.
        "forceConsistentCasingInFileNames": true,

        // Allows interoperability between CommonJS and ES modules.
        "esModuleInterop": true,

        // Specifies how TypeScript resolves module names.
        "moduleResolution": "node",

        // Allows importing JSON files as modules.
        "resolveJsonModule": true,

        // Treats each file as a separate module to improve isolation.
        "isolatedModules": true,

        // Specifies the handling of JSX files.
        "jsx": "preserve"
      },
      // Specifies directories or files to be excluded from compilation.
      "exclude": ["node_modules", "coverage", "cypress"]
    }
    ```
  </details>

Communication
-------------

Microfrontends communicate with each other using well-defined APIs, events, or shared data stores. The communication mechanisms can include:

- [TODO] Dependencies: Explain how dependencies are managed between apps and packages.

-  [FUTURE] HTTP APIs: Apps can communicate with each other via RESTful or GraphQL APIs exposed by the server.

-  [FUTURE] Events: Apps can publish and subscribe to events to notify other microfrontends of changes or actions.

-  [FUTURE] Shared Data Stores: Shared data stores like Redux or context can be used to manage and share global state across microfrontends.

Deployment
----------

Each microfrontend can be deployed independently, allowing for continuous integration and continuous delivery (CI/CD). The deployment process can include:

- [FUTURE] Automatic deployment of each app or package when changes are pushed to the respective repositories.

- [FUTURE] Docker containers and orchestration tools like Kubernetes can be used for containerization and scaling.

Benefits
--------

The microfrontend architecture offers several advantages:

-  Team Independence: Different teams can work on separate microfrontends without interfering with each other's codebase.

-  Modular Development: Each app or package can be developed, tested, and deployed independently.

-  Scalability: Apps can be scaled horizontally to handle increased traffic or user load.

-  Reusability: Shared packages and components promote code reuse and maintainability.

Challenges
----------

While microfrontends offer many benefits, they also come with challenges:

-  Increased Complexity: Managing multiple apps and their interactions can be complex.

-  Consistency: Ensuring a consistent user experience across microfrontends can be challenging.

-  Performance: Care must be taken to optimize loading times and reduce unnecessary data transfers.
