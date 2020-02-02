#!/usr/bin/env bash

echo "Refreshing: Portfolio2.0"

/usr/local/bin/docker-compose pull api
/usr/local/bin/docker-compose pull web

echo "Rerunning composition"
/usr/local/bin/docker-compose up -d


