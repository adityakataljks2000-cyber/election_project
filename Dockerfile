FROM nginx:alpine

COPY . /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

RUN printf 'server { listen 8080; server_name localhost; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
