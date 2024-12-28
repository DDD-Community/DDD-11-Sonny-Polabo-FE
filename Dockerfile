FROM node:20-alpine3.19 as builder

# Install necessary dependencies for Puppeteer and Chromium
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Set environment variable for Puppeteer to use installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

EXPOSE 3000
CMD ["npm", "run" , "start"]
