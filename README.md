## Summary of Repo

This repository contains automated tests using the WebDriverIO.

## Requirements

Before running the tests, you need to have the following software and dependencies installed:

- Node.js
- npm
- yarn

## Steps to Install

To install the project dependencies, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/YuriiHryshko/WebdriverIOTask.git`
2. Navigate to the project folder: `cd WebdriverIOTask`
3. Install the required dependencies: `npm install`
4. Clone repository with application for testing: `git clone https://github.com/cypress-io/cypress-realworld-app.git`
5. Install the required dependencies: `yarn install`
6. Run the application: `yarn dev`

## Steps to Run Tests

You can run the tests with the following command:

### Run All Tests

`npm run test`

### Run Tests in Chrome

`npm run test:chrome`

### Run Tests in Firefox

`npm run test:firefox`

### Run Home Suite

`npm run test:suite:home`

### Run Login Suite

`npm run test:suite:login`

### Run Settings Suite

`npm run test:suite:settings`

## Steps to Create the Report

1. Generate the Allure report: `npm run report:generate`
2. Open the generated Allure report in the browser: `npm run report:open`


