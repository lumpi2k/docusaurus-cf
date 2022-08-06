# About this Repo

Documentation is a huge part of modern software development. In this repo I'm evaluating Docusaurus as a scalable and flexible documentation system. I'm looking for something that's:

- maintainable by average PMs
- enables approval workflows
- has versioning built in
- can handle prose and OpenAPI specs
- is SEO friendly
- has great performance
- and doesn't stink (like confluence 😒)

## Side-side-project: Dev Experience

While evaluating a new docs system, I'm also familiarizing myself more with hosting the whole dev environment in a dev container, using docker to setup the whole dev environment. 

This way, my coding experience is mostly the same whether I'm on my Macbook, my Windows PC or in WSL2 on my work machine. Have a look at the `.devcontainer` directory.

# Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is reachable under https://docs.hannesreinberger.de using https://pages.cloudflare.com - a service from cloudflare that deploys your static pages on their CDN. No need for a server of your own!

The site auto-deploys whenever the main branch changes. In order to only deploy runnable code, I'm using a simple github action to test build the app on a set of node.js versions.