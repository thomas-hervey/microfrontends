# Microfrontends

Welcome to the Project Name repository! This project follows a set of coding conventions and standards to maintain code consistency and readability. Please review and adhere to the following guidelines when contributing to the project.

## Running the application

This application uses turborepo to manage multiple packages. To run the application, follow the steps below:

- Install the dependencies by running `yarn install`.
- `yarn start` or `sh yarn dev`
- Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
  - When running in development mode, you can access storybook at [http://localhost:6006](http://localhost:6006).

## Building the application

To build the application, run the following command:

- `yarn build`
- Verify with `yarn start`

The application is also containerized, so you can build and run the application using **Docker**. To build and run the application using Docker, follow the steps below:

- Build the application with `COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build`
- Start the application with `docker-compose -f docker-compose.yml up`

## Code Style Guide

### EditorConfig

  We use an EditorConfig file to maintain consistent coding styles across different editors and IDEs. Make sure your development environment supports EditorConfig. You can find the configuration in the `.editorconfig` file at the project root.

### JavaScript (.js) Files

- Use two spaces for indentation.
- Follow the guidelines outlined in the `.eslintrc.js` configuration file for JavaScript linting.

### TypeScript (.ts, .tsx) Files

- Use two spaces for indentation.
- Follow the guidelines outlined in the `.eslintrc.js` configuration file for TypeScript linting.

### CSS (.css) Files

- Use two spaces for indentation.
- Follow a [BEM (Block Element Modifier)](http://getbem.com/) naming convention for class names.
- Maintain a modular and organized approach to styling.

### HTML (.html) Files

- Use two spaces for indentation.
- Maintain clean and well-structured HTML code.

### Markdown (.md) Files

- Use two spaces for indentation.
- Follow [CommonMark](https://commonmark.org/) for Markdown formatting.

---

## Commit Message Guidelines

  We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for commit messages to ensure clarity and consistency in version control history. Each commit message should adhere to the following format:

- `<type>`: Describes the purpose of the commit. It must be one of the following types:
  - `feat`: A new feature
  - `fix`: A bug fix
  - `chore`: Routine tasks, maintenance, or tooling changes
  - `docs`: Documentation changes
  - `style`: Code style, formatting, or styling changes
  - `refactor`: Code refactoring
  - `test`: Adding or updating tests
  - `ci`: Changes to the continuous integration (CI) pipeline configuration
  - `perf`: Performance improvements
- `<scope>` (optional): Specifies the scope of the commit, typically indicating the component, module, or area of the project that was affected.
- `<message>`: Provides a brief and concise description of the changes.

  Examples:

- `feat(auth)!: add user authentication feature`
- `fix(button): resolve issue with button component`
- `docs(readme): update installation instructions`

  Please ensure that your commit messages are meaningful and follow this format when contributing to the project.

## Automated Checks

  We use automated tools and CI/CD pipelines to perform checks and validations. These checks include code linting, formatting, and testing. Before creating a pull request, make sure to run the following commands locally to ensure your code meets the project's standards:

- `yarn lint`: Check for code style and formatting issues.
- `yarn test`: Run tests to ensure code functionality.

</details>

---
