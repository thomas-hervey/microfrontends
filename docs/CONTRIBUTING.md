Contributing to Microfrontend
========

Thank you for your interest in contributing to the Microfrontend project! We welcome contributions from the community to help improve and grow our microfrontend ecosystem. Whether you want to report a bug, suggest an enhancement, or submit code changes, we appreciate your help.

Code of Conduct
---------------

Before contributing, please read and adhere to our [Code of Conduct](https://github.com/thomas-hervey/microfrontends/docs/code-of-conduct.md). We expect all contributors to follow these guidelines and create a positive and inclusive environment for everyone.

How to Contribute
---------------

### Reporting Bugs & Suggesting Enhancements

If you encounter a bug or unexpected behavior while using Microfrontend, please open an issue in the [GitHub issue tracker](https://github.com/thomas-hervey/microfrontends). Be sure to follow either the [BUG] or [ENH] template.

### Contributing Code

This project uses Git Flow to manage code changes. To start using Git Flow locally, run the following commands:

```bash
git checkout develop
git pull origin develop
git flow init
```

If you're interested in contributing code changes or new features, follow these steps:

1\.  Create a new Git Flow branch for your changes.

```bash
git flow feature start BUG_feature-or-fix-name
or
git flow feature start ENH_feature-or-fix-name
```

2\.  Make your code changes, following the project's coding style and guidelines found in [README.md](https://github.com/thomas-hervey/microfrontends/docs/README.md).

3\.  Commit your changes with a descriptive commit message.

```bash
git commit -m "BUG(button): Fix button alignment"
```

4\.  Push your changes to your GitHub repository.

```bash
git push origin feature/BUG_feature-or-fix-name
```

5\.  Create a pull request (PR) from your branch to the `develop` repository.

6\.  Fill out the PR template with details about your changes.

7\.  Collaborate with maintainers and address any feedback or changes requested.

8\.  Once your PR is approved, it will be merged into the `develop` branch.

Code Review
-----------

All code contributions are reviewed by maintainers and contributors to ensure code quality and adherence to project standards. Be prepared to make revisions based on feedback during code reviews.

License
-------

This project is licensed under the MIT License. See the [LICENSE](https://github.com/thomas-hervey/microfrontends/LICENSE) file for details.

Thank you for contributing to Microfrontend! Your efforts help make this project better for everyone.
