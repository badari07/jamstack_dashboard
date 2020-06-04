### JAMstack App

Jamstack app with Authenticate users with Netlify Identity.

## Instructions to Run App.

After Cloning or downloading zip file, Run

```bash
yarn or npm install
```

for downloading the dependencies of project.

## Netlify

Install netlify-cli by

```bash
yarn add netlify-cli / npm i netlify-cli
```

After installing run

```bash
 netlify login
```

You should to register to netlify.

## To run the App in development mode run

```bash
netlify dev
```

## For work on TODO app

If you want to work on Todo app you should register with faunaDB database and config the graphQl schema and should save the FAUNA_SERVER_SECRET in .env file in client side.

Should enable netlify Identity in netlify and should add environment variable in netlify for accecesing db in serverless function.

You can view the App in 'http://localhost:8888'
