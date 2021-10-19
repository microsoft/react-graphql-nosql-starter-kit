const { CosmosDataSource } =require('apollo-datasource-cosmosdb');
const { nanoid } = require('nanoid');

class CosmosAPI extends CosmosDataSource {

    async getAllItems(){
        let {resources} = await this.findManyByQuery(
            {
              query: `SELECT * FROM c`, 
            });
      
        return resources;
    }
    async getAllITaggedtems(tagname) {
        let {resources} = await this.findManyByQuery(
            {
              query: `SELECT * FROM c WHERE c.tag = @tagName `,
              parameters: [{ name: "@tagName", value: tagname }],
            });
      
        return resources;
    }
    async getItemById(id){
       return this.findOneById(id);
    }
    
    async updateItem(item){
        const { resource } = await this.getCollection().item(item.id, item.tag).read();
        if (!resource) return false;
       
        resource.title=item.title;
        resource.text=item.text;
        resource.imgurl=item.imgurl;
        
        
        let {resource: replaced } = await this.geCollection() 
         .item(item.id, item.tag)
         .replace(resource);
        if(!replaced) return false;
        return true; 
      }

    async addNewItem(newitem){
      newitem.id=nanoid();
      let {resource: createdItem} = await this.getCollection() 
       .items.create(newitem);
      return createdItem.id; 
    }
}
module.exports = CosmosAPI;