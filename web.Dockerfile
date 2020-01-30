# Frontend web container

# **BUILD STAGE**
FROM node:latest as builder

WORKDIR app/
COPY package*.json ./
RUN npm ci --only=production --silent

COPY public/ public/
COPY src/ src/

ENV SKIP_PREFLIGHT_CHECK=true
RUN npm run client-build

# **CONTAINER STAGE**
FROM nginx:alpine

COPY --from=builder /app/build /srv/www
COPY default.conf /etc/nginx/conf.d/default.conf

# expose port specified in default.conf
EXPOSE 8080
