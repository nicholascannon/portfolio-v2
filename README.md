# Software Development Portfolio

My software development portfolio built with Node.JS, React, Redux and MongoDB. I've created a custom admin backend that allows me to change the content on the site including the about me page and the projects page. 

Goals:
- Deploy a real world full stack project with node, react, redux and mongodb
- Create a portfolio that will last i.e. I can make small changes in an admin panel
- Have some kind of authentication aspect (the admin panel)
- Use SendGrid to send contact messages to my inbox
- Create a continuous deployment workflow with docker and docker compose that makes deployments easy

**Please check out the [site](https://www.niccannon.com/) live!!**

## Continuous Deployment

I've created an easy continuous deployment workflow that enables me to build and push the apps docker containers to a container registry (a free private registry with [Treescale](https://treescale.com/)) using the `deploy-to-prod.sh` script. After the containers have been pushed to the registry, I've set up a cron job on my Digital Ocean droplet that calls the `portfolio-refresh.sh` script. This script pulls the latest container versions from the registry and reruns the compose file.

This CD workflow has made updating the site extremely easy.

## Homepage

![homepage](https://i.imgur.com/yqLjgpw.png)


## Admin Panel: Changing about me

![about](https://i.imgur.com/NrLFyau.png)

## Admin Panel: Adding / Removing Projects

![project](https://i.imgur.com/c8dL3b9.png)
