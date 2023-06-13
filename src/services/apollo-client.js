import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.prepr.io/${process.env.REACT_APP_PREPR_ACCESS_TOKEN || '7f05e9e2f17f1b3d5e08dab3a565acbea8b87745473917e159f70ae1cf0334b9'}`,
  cache: new InMemoryCache(),
});

export default client;