# Use the official Node.js 14 image.
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the rest of the code
COPY . .

# Access the secret values
ARG PROJECT_ID
ARG SECRET_KEY
ARG GCP_CREDENTIALS

# Create a .env file
RUN echo "PROJECT_ID=\"$PROJECT_ID\"" >> /usr/src/app/.env
RUN echo "SECRET_KEY=\"$SECRET_KEY\"" >> /usr/src/app/.env
RUN echo "$GCP_CREDENTIALS" >> /usr/src/auth.json


# Create GCP credentials file
# RUN echo "$GCP_CREDENTIALS" > /usr/src/auth.json

# Install production dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Define the command to run the application
CMD [ "npm", "start" ]