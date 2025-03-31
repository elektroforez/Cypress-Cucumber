# Cypress-Cucumber

##  Summary
This repository contains an end-to-end (E2E) testing framework using [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/) for . It allows writing BDD-style tests with Gherkin syntax and executing them efficiently with Cypress.

## Requirements
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/electroforez/Cypress-Cucumber.git
   cd Cypress-Cucumber
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Running Tests
### Headless mode
Run tests in the terminal:
```sh
npm run test
```

### Open Cypress GUI
To launch the Cypress Test Runner:
```sh
npm cypress open
```

## Generating Reports
To generate an HTML report after running tests:
```sh
npm run report:merge
npm run report:generate
```
This will create a report in the `public` directory.
### Html report is available on GitHub Pages 
https://elektroforez.github.io/Cypress-Cucumber/

