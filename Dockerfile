FROM --platform=$BUILDPLATFORM node:alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . .
EXPOSE 80
CMD npm run serve -- --port 80 --host 0.0.0.0