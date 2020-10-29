FROM node:latest
ENV NODE_ENV=production
WORKDIR /pledge
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["node", "server/server.js"]