# react-quick-start
The React quick start project launches a blog app with content from Prepr.

[Stackblitz demo](https://stackblitz.com/edit/prepr-react-quick-start)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Add the environment file
Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:
```bash
cp .env.example .env
```

## Update the environment file
In the .env file replace `<YOUR-ACCESS-TOKEN>` with the Prepr access token from your environment with demo content.

## Development Server

Start the development server on http://localhost:3000

```bash
npm start
```

## Production

Build the application for production:

```bash
npm run build
```

Check out the [deployment documentation](https://create-react-app.dev/docs/deployment/) for more information.

## The end result

![blog site end result](https://assets-site.prepr.io//5oz8w28ybxje-screenshot-2023-05-10-at-111353.png)
