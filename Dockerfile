FROM node:alpine
ADD . /app 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm install
EXPOSE 3001:3000
CMD ["npm", "run", "start"]
