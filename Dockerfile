FROM node:20-alpine3.19 as builder

# Update package list and install Chromium
RUN apt-get update && apt-get install -y \
    chromium-browser \
    --no-install-recommends

# Clean up to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Verify installation
RUN chromium-browser --version

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run" , "start"]
