FROM node:12.20-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g @angular-devkit/build-angular

ENV PATH /atendimento/workspace/node_modules/.bin:$PATH

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
