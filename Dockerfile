# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# --- FIXES START ---
# Update caniuse-lite database
RUN npx update-browserslist-db@latest --update-db

# Install missing babel plugin to avoid breakage
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

# --- FIXES END ---

# Copy rest of the application
COPY . .

# Optional: Limit memory usage during build
ENV NODE_OPTIONS=--max_old_space_size=1024

# Build the React app
RUN npm run build

# Use a minimal nginx image to serve the build
FROM nginx:stable-alpine

# Copy built React app to nginx's public folder
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
