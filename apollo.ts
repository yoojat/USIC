import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_PROJECT_API,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_PROD_AUTH_TOKEN}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
