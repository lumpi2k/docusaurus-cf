# First we're building the content in a node container
FROM node:alpine as build
RUN apk --no-cache add git
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
RUN npm run build

# then we're copying the content in an nginx container to serve from
FROM nginx:alpine as serve
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80