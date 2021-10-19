const { ApolloServer } = require("apollo-server-azure-functions");
const typeDefs = require('./schema');


const resolvers = {
  Query: {
    hello: () => "Hello world",
    getAllItems:(_,{},{dataSources})=>dataSources.cosmosAPI.getAllItems(),
    getAllTaggedItems: (_,{tag},{dataSources})=>dataSources.cosmosAPI.getAllTaggedItems(tag),
    getItemByID:(_,{id },{dataSources})=> dataSources.cosmosAPI.getItemByID(id),
  },
  Mutation:{
    addNewItem:(_,{tag,text, title, imgurl},{dataSources}) => dataSources.cosmosAPI.addNewItem({tag:tag,text:text ,title:title,imgurl:imgurl}),
    updateItem:(_,{id,tag,text, title, imgurl},{dataSources}) => dataSources.cosmosAPI.updateItem({id:id,tag:tag,text:text ,title:title,imgurl:imgurl}),
    }
};
const dsFile= process.env.cosmos ?'CosmosAPI' : 'HardcodedAPI';
const CosmosAPI =  require('./datasources/'+dsFile);

const server = new ApolloServer(
      { typeDefs,
        dataSources: () => {
          let cc=new CosmosAPI();
          if( process.env.cosmos){
            const cosmosClient = new CosmosClient(process.env.cosmosConnStr);
            const cosmosContainer = cosmosClient.database(process.env.cosmosDBName).container(process.env.cosmosContainerName);
            cc=new CosmosAPI(cosmosContainer);
          }
          return { cosmosAPI: cc  };
        }, 
         resolvers,
         introspection: (process.env.NODE_ENV !== 'production'),
         playground: (process.env.NODE_ENV !== 'production'), 
       });



cors=(process.env.NODE_ENV !== 'production') ? {
  cors: {
    origin: 'http://localhost:3000',
    allowedHeaders:['Content-Type', 'Authorization']
 }} :{};
exports.graphqlHandler = server.createHandler(cors);