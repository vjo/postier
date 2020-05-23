# Postier

## Context

Postier is the french term for postman.

This project is built out of the frustration using La Poste's [tracking service](https://www.laposte.fr/outils/suivre-vos-envois).

## Getting Started

### Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app). It uses [Material-UI](https://material-ui.com/) components.

Get an API key from La Poste's [API Suivi](https://developer.laposte.fr/products/suivi/2) and add it in a `.env` file at the root of the project:

```
OKAPI_KEY='YOUR_KEY'
```

Then, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
