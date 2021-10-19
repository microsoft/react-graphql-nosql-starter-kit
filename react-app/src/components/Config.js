const prod = {
  graphqluri: '/api/graphql'
 }; 
 const dev = {
    graphqluri: 'http://localhost:7071/api/graphql',
 }; 
 export const Config = process.env.NODE_ENV === 'development' ? dev: prod;