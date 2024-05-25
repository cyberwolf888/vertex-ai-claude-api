# Use the official Node.js 14 image.
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the code
COPY . .

# Install production dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]