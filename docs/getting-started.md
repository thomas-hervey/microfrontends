Getting Started with Acme Microfrontend App
===========================================

Welcome to the Acme Microfrontend application! This guide will help you get started with setting up, developing, and running the application.

Prerequisites
-------------

Before you begin, make sure you have the following prerequisites installed on your system:

-   [Node.js](https://nodejs.org/): Ensure you have Node.js installed (recommended version 14 or later).
-   [pnpm](https://pnpm.io/): We use pnpm as our package manager. You can install it globally using npm or yarn: `npm install -g pnpm`.

Clone the Repository
--------------------

To get started, clone the Acme Microfrontend repository from GitHub:

bashCopy code

`git clone https://github.com/thomas-hervey/microfrontends.git
cd microfrontends`

Install Dependencies
--------------------

Navigate to the root of the project and install project dependencies using pnpm:

bashCopy code

`pnpm install`

Development Server
------------------

To run the development server, use the following command:

bashCopy code

`pnpm dev`

This command will start the development server for the entire application, making your microfrontends available for local development.

Available Scripts
-----------------

In the root directory of your project, you can run the following scripts:

-   `pnpm dev`: Start the development server.
-   `pnpm build`: Build the entire application.
-   `pnpm clean`: Clean build artifacts and dependencies.
-   `pnpm lint`: Run linting checks for the project.
-   `pnpm format`: Automatically format your code using Prettier.
-   `pnpm changeset`: Manage versioning and releases using Changesets.

Explore the Apps and Packages
-----------------------------

The Acme Microfrontend application is organized into apps and packages. Apps are found in the `apps` directory, and packages are found in the `packages` directory. Each app and package may have its own README and documentation.

-   Explore the apps in the `apps` directory for individual application documentation.
-   Explore the packages in the `packages` directory for reusable libraries and components.

Contributing
------------

We welcome contributions from the community! If you'd like to contribute to the Acme Microfrontend project, please read our [Contributing Guidelines](https://chat.openai.com/c/docs/contributing.md).

License
-------

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.
