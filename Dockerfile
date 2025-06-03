# Use an official Node image to build the app
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 🔧 Increase memory limit for Node.js build
ENV NODE_OPTIONS=--max_old_space_size=1024

RUN npm run build

# Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
