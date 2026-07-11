# Raam Records

Portfolio website for Sriram Venkatesh, a music producer, composer, sound designer, and audio engineer from Chennai.

## Development

```sh
npm ci
npm run dev
```

The local development server runs on port `8080`.

## Build

```sh
npm run build
```

The production build is emitted to `dist`.

## Deployment

This branch is configured for Cloudflare Workers static assets using `wrangler.jsonc`.

Use:

```sh
npm ci
npm run build
```

Cloudflare uploads the `dist` directory and uses `single-page-application` fallback handling for client routes.
