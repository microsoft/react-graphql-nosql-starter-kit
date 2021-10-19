const { gql } = require('apollo-server-azure-functions');


const typeDefs = gql`

 type Item {
     id: ID
     tag: String
     title: String
     draft: Boolean
     text: String
     posted: String
     imgurl: String
 } 
 
    type Query {
        hello: String
        getItemByID(id:String): Item
        getAllItems:[Item]
        getAllTaggedItems(tag:String):[Item]
      }
    type Mutation {
        addNewItem(
            tag: String
            title: String
            text: String
            imgurl: String
        ): String
        updateItem(
            id: ID
            tag: String
            title: String
            text: String
            imgurl: String
        ):Boolean
    }
`;
module.exports = typeDefs;