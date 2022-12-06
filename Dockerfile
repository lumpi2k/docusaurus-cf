FROM --platform=$BUILDPLATFORM node:alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as serve
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80