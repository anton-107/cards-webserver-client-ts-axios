Typescript+Axios client for [Cards API](https://github.com/anton-107/cards-webserver-nestjs) that can be used to build a React Frontend.

Steps to build:

1. Start a local server from [cards-webserver-nestjs](https://github.com/anton-107/cards-webserver-nestjs). This will expose `http://localhost:3000/swagger-api-json` endpoint
2. In this package, run `npm run generate-source` - this will generate `.ts` files for the `src/` folder
3. In this package, run `npm run build` - this will generate `.d.ts` and `.js` files in the `dist/` folder
