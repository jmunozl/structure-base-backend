FROM alpine

RUN apk add --update nodejs yarn 

WORKDIR /app

COPY package.json .

RUN yarn 

COPY . .

RUN yarn build

CMD ["yarn", "start"]
