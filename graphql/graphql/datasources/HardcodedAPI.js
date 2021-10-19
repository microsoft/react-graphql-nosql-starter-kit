
const { DataSource, DataSourceConfig } = require('apollo-datasource');
const hardcodedItems=[
    { tag:"random", id:"abd",title:"First Item",text:"This is some text", imgurl:"",posted:"2021-12-10"},
    { tag:"random", id:"babd",title:"Second Item",text:"More random text", imgurl:"",posted:"2021-12-11"},
    { tag:"article", id:"cabd",title:"Check out this great site",text:"Lots of good information here: https://docs.microsoft.com ", imgurl:"",posted:"2021-12-12"},
    { tag:"article", id:"dabd",title:"Put your source code here",text:"Migrate your code to https://github.com", imgurl:"",posted:"2021-12-13"},
];

class CosmosAPI extends DataSource {
    async getAllItems(){
        return hardcodedItems;  
       
    }
    async getAllTaggedItems(tagname) {
       
            let items = [];
            hardcodedItems.map((i) => {
                    if (i.tag === tagname) {
                        items.push(i);
                    }
            });
            return items;
       
       
        
       
    }
    async getItemById(id){
       
            let item=null;
            hardcodedItems.map((i) => {
                if (i.id === id) {
                    item=i;
                }
        });
        return item;              
      
    }

    async updateItem(item){
        return true;
    }

    async addNewItem(newitem){
      return "abcde";
    }
}
module.exports = CosmosAPI;