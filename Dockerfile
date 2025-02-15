FROM node:22.13.1

WORKDIR /BACK-NODE
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]