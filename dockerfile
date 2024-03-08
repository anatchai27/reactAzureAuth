# Fetch the specific node image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Build the app
RUN npm run build

# Start the app
CMD ["npm", "start","start:prod"]
