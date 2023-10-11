# Use the Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install Vite globally
RUN npm install -g vite

# Copy the rest of the application code
COPY . .

# Expose the port you've mentioned in your Vite configuration (e.g., 5173)
EXPOSE 1010

# Start the development server using npm
CMD ["npm", "run", "dev"]
