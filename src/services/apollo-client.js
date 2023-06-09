import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.prepr.io/${process.env.REACT_APP_PREPR_ACCESS_TOKEN}`,
  cache: new InMemoryCache(),
});

export default client;