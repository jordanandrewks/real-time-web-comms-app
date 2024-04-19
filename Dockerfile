# ref https://cleverzone.medium.com/dockerizing-first-next-js-application-9026894df384

# node version 20
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Define environment variable
#ENV NODE_ENV development

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the Next.js application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
