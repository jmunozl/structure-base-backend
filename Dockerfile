FROM node:lts-alpine3.15 AS development

WORKDIR /usr/src/app

COPY package.json ./ yarn.lock ./

RUN yarn global add rimraf

RUN yarn install --only=development

COPY . .

RUN yarn  build

FROM node:lts-alpine3.15 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./ yarn.lock ./

RUN yarn install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]








# FROM alpine:3.15

# RUN apk add --update nodejs yarn

# WORKDIR /usr/src/app

# COPY package.json ./ yarn.lock ./

# RUN yarn install

# COPY . . 

# RUN yarn build

# EXPOSE 4000

# CMD ["yarn", "start:prod"]