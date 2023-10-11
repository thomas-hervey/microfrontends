#!/bin/sh

source .env

# Build the storybook static site and deploy it to Chromatic
npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
