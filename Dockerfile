# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.11.0

# Base image para el entorno de desarrollo
FROM node:${NODE_VERSION}-alpine as dev

# Set working directory
WORKDIR /usr/src/app

# Copiar solo los archivos de configuración para instalar dependencias
COPY package*.json ./

# Instalar todas las dependencias, incluyendo devDependencies
RUN npm install

# Copiar el código fuente al contenedor
COPY . .

# Establecer variables de entorno
ENV NODE_ENV=development

# Exponer el puerto utilizado en desarrollo
EXPOSE 3008

# Comando para ejecutar la aplicación en desarrollo
CMD ["npm", "run", "dev"]
