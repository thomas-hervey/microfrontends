Getting Started with Microfrontend App
===========================================

Welcome to the Microfrontend application! This guide will help you get started with setting up, developing, and running the application.

Prerequisites
-------------

Before you begin, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): Ensure you have Node.js installed (recommended version 18 or later). We recommend using `nvm` for managing Node.js versions.
- [yarn](https://yarnpkg.com/): We use yarn as our package manager. You can install it globally using npm or yarn: `npm install -g yarn`.

Clone the Repository
--------------------

To get started, clone the Microfrontend repository from GitHub:

```bash
git clone https://github.com/thomas-hervey/microfrontends.git
cd microfrontends
```

Install Dependencies
--------------------

Navigate to the root of the project and install project dependencies using yarn:

`yarn install`

Development Server
------------------

This application uses [Turbo Repo](https://turbo.build/repo) to build and run multiple independent apps and packages. To run the development server, run the following command from the project root:

`yarn dev`

This command will start the development server for the entire application, making your microfrontends available for local development. You can access the following apps at the specified URLs:

- **Apps**
  - Main App: [http://localhost:3000](http://localhost:3000)
  - Docs App: [http://localhost:3001](http://localhost:3001)
- **Packages**
  - Storybook: [http://localhost:6006](http://localhost:6006)

Available Scripts
-----------------

In the root directory of your project, you can run the following scripts:

- `yarn dev`: Start the development server.
- `yarn build`: Build the entire application.
- `yarn clean`: Clean build artifacts and dependencies.
- `yarn lint`: Run linting checks for the project.
- `yarn format`: Automatically format your code using Prettier.
- `yarn changeset`: Manage versioning and releases using Changesets.

Explore the Apps and Packages
-----------------------------

The Microfrontend application is organized into apps and packages. Apps are found in the `apps` directory, and packages are found in the `packages` directory. Each app and package may have its own README and documentation.

- Each of the `apps` is an independent NextJS application that utilizes one or more packages from `packages`.
- Explore the packages in the `packages` directory for reusable libraries and components including a design system, storybook, utils, and application pages.

Contributing
------------

We welcome contributions from the community! If you'd like to contribute to the Microfrontend project, please read our [Contributing Guidelines](https://github.com/thomas-hervey/microfrontends/docs/contributing.md).

License
-------

This project is licensed under the MIT License. See the [LICENSE](https://github.com/thomas-hervey/microfrontends/LICENSE) file for details.
