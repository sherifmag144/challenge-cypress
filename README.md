# Automation Testing Repo

This project is set up with the following tools:

- **ESLint** → To enforce consistent coding style and detect code issues early.
- **Prettier** → To automatically format code and keep it clean and readable.
- **Cypress (JavaScript)** → For end-to-end UI Automation.

## Purpose

The goal of this setup is to maintain a clean and standardized codebase while automating tests effectively.

# Automation Challenges

This repository contains two challenges:

- **Challenge 1** → Reverse words in a string
- **Challenge 2** → Amazon automation test

## How to Run

# Challenges

-Challenge 1
File: `cypress/e2e/challenge1.js`  
Run it with:

```bash
cd to challenge1
node challenge1.js
or directly from package.json file (challengeOne)

-Challenge 2
File: `cypress/e2e/amazon.cy.js`
directly from package.json file (testAmazon)
or write in terminal npx cypress run --spec 'cypress/e2e/amazon.cy.js or you can run from Cypress UI by npx cypress open
and to show the report there is allure report i generated (allure-report\index.html) you can open the report directly or using the commands that generate and open allure report from Package.json file

if you want to download the repo , you should install all devDependencies in Package.json by write in terminal "npm install" 

```
