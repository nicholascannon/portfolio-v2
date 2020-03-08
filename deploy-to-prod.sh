#!/usr/bin/env bash

# auth with registry
docker login repo.treescale.com

# build image container
if [[ $1 == 'api' ]]; then
    echo 'Deploying API'
    docker build -t repo.treescale.com/nicholascannon1/portfolio/portfolio-api:latest -f api.Dockerfile .
    docker push repo.treescale.com/nicholascannon1/portfolio/portfolio-api:latest
elif [[ $1 == 'web' ]]; then
    echo 'Deploying WEB'
    docker build -t repo.treescale.com/nicholascannon1/portfolio/portfolio-web:latest -f web.Dockerfile .
    docker push repo.treescale.com/nicholascannon1/portfolio/portfolio-web:latest
else
    echo 'Error please supply argument: web or api'
fi
