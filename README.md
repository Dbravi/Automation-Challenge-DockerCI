Overview
This project includes automated tests designed to validate the functionality of an e-commerce website built using Playwright. The tests cover various user flows such as browsing products, adding them to the cart, and completing the checkout process.

Tests
The tests are designed to ensure the following:

Navigating through product pages.
Selecting product options (size, color).
Adding products to the shopping cart.
Verifying the cart’s contents.
Proceeding through the checkout process, including filling out shipping and payment information.
Completing an order and verifying the "Thank You" page.
Each test case simulates a user journey on the website, ensuring key functionalities work as expected.

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

npx playwright test checkoutTest.js

After running the tests, a report will be generated showing which tests passed or failed and screenshot evidence for the validation step. Review the output to ensure that all tests have passed and the application works as expected.




