Overview
This project includes automated tests designed to validate the functionality of an e-commerce website built using Playwright. The tests cover various user flows such as browsing products, adding them to the cart, and completing the checkout process.

The tests are designed to ensure the following:

Validate payment with Credit Card
Validate payment with Check/Money
Validate Add a single product to cart
Validate that mail is a mandatory field for the registry at checkout
Validate account creation using randomized data"
Validate domain check is correct - (email missing @)
Validate navigation to all main pages on the website

Installation
Prerequisites
Before running the tests, make sure the following are installed:

Node.js: You need Node.js installed on your machine. You can download it from here.
Playwright: The Playwright library is used to interact with the browser during the tests.

Steps to Install
Clone the repository:

git clone https://github.com/Dbravi/Automation-Challenge-DockerCI.git
cd <repository-directory>

Install dependencies:
npm install
This will install all the necessary packages, including Playwright, required for running the tests.

Running the Tests
To run the tests, use the following command:

npx playwright test
This will execute the tests defined in the tests directory. Playwright will launch a browser, perform the actions defined in the tests, and generate a report.

Running Specific Tests
To run specific tests or groups of tests, use the following syntax:

npx playwright test <test-file-name>
For example, to run the test for the checkout process, you might run:

This repository is using allure for the testing report, on Github Actions pipeline the report is attached, but to generate them locally use

allure generate ./allure-results -o ./allure-report
allure open ./allure-report

To pull this project docker Image use

docker pull dovrak/playwright-1