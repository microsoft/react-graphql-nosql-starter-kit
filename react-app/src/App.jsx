import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Routing from './components/Routing';
import {Config} from './components/Config';

export default function App() {
    
  const httpLink = createHttpLink({
    uri:Config.graphqluri
    
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    
    
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
 
  return (
    <ApolloProvider client={client}>
          <Routing/>
    </ApolloProvider>
  );
}

