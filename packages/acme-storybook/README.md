
### Testing Github actions locally
This project has github action workflows for testing storybook (see the root dir). You can test these locally using [nektos/act]. To do this
1. Install [act](https://github.com/nektos/act) with `brew install act`
2. Install github cli with `brew install gh`
3. Run `act` and include secrets such as CHROMATIC_PROJECT_TOKEN using `act -s CHROMATIC_PROJECT_TOKEN=<YOUR_TOKEN_HERE>`. I've found it's best to supply the secret directly rather than trying to use an .env file.
