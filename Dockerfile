# Use an official Node.js image as the base
FROM mcr.microsoft.com/playwright:v1.46.0-noble

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Install Playwright dependencies and ensure Playwright binaries are included
RUN npx playwright install

# Command to run your tests (adjust as needed)
CMD ["npx", "playwright", "test"]
