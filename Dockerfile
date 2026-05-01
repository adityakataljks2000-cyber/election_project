# Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN sed -i 's/listen       80;/listen 8080;/g' /etc/nginx/conf.d/default.conf
<<<<<<< HEAD

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
=======

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 3fa87064b739f3e597ff4a7f1bec724b8d9d0a83
