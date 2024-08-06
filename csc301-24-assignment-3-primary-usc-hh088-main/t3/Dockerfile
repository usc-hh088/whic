# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the port to access the Express server
EXPOSE 3001

# Run the Express server
CMD ["node", "./server/index.js"]
