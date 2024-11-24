# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Install git (if needed)
RUN apk add --no-cache git

# Copy the local files to the working directory in the container
COPY . .

# Install project dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
