FROM node:20-alpine

WORKDIR /usr/src/app


COPY package*.json ./
COPY prisma ./prisma/

# Instalamos dependencias
RUN npm install


COPY . .

RUN npx prisma generate

# COMPILAR
RUN npm run build

EXPOSE 3000

# FROZAR AL PRISMA 
CMD ["sh", "-c", "npx prisma db push && npm run start:prod"]
