FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build  # This is typically used for React or frontend frameworks

EXPOSE 3000

CMD ["yarn", "start"]  # Starts the React development server
