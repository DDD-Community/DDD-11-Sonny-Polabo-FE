FROM node:20-alpine3.19 as builder

# Install Chromium and necessary dependencies
RUN apk add --no-cache \
    chromium \
    harfbuzz \
    nss \
    freetype \
    ttf-freefont \
    mesa \
    dbus

# Set environment variable for Chromium
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_PATH=/usr/lib/chromium/

# Verify installation
RUN chromium-browser --version

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run" , "start"]
