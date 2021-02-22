FROM node:12.20-alpine AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g @angular-devkit/build-angular

COPY . .

RUN npm run build --prod


RUN ls /usr/src/app/dist

# Serving application with NGINX
FROM nginx:1.15.8-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=build /usr/src/app/dist/pokedex /usr/share/nginx/html
