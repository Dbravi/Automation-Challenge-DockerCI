# Use an official Playwright image as the base
FROM mcr.microsoft.com/playwright:v1.46.0-noble

# Set working directory in the container
WORKDIR /usr/src/app

# Install OpenJDK 11 (required for Allure)
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install project dependencies from package.json
RUN npm install

# Install Playwright dependencies and ensure Playwright binaries are included
RUN npx playwright install --with-deps

# Install Allure command-line tool globally
RUN npm install -g allure-commandline

# Copy the rest of the project files into the container
COPY . .

# Command to run your tests (adjust as needed)
CMD ["npx", "playwright", "test"]
