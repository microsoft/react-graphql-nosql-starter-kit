# React / GraphQL / NoSQL Starter-Kit
Create a modern web app with modern middle ware, and a modern backend.  For less than $1 / month you can run this app with:
* A Custom Domain 
* SSL
* Authentication

[Jump to < 2 step quickstart>](quickstart)

# Quickstart
## Prereqs
* [npm](https://nodejs.org/en/download)
* functions tool kit ([windows](https://go.microsoft.com/fwlink/?linkid=2174087),[Linux](https://go.microsoft.com/fwlink/?linkid=2174087),[mac](https://go.microsoft.com/fwlink/?linkid=2174087))
* [visual studio code](https://code.visualstudio.com/Download)

## Start Local
1. Fork this repo
2. Clone the repo
3. Start the react app: 
```
cd react-app
npm start
```
4. Start the GraphQL Service
```
cd graphql
func start
```

5. edit away! ([see detailed explanation of app](detailed description))



## Transition to the Cloud
### Run front end and graphql in the cloud (Free)
1. Follow this [quickstart to deploy an Azure Static Site](https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript#create-a-static-web-app)
2. The previous step will create a file like ".github/workflow/azure-static-web-apps-orange-flower-05e7e1b10.yml"  You'll need to edit two lines (app_location and api_location) in this file:
```yml
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: "/react-app/" # App source code path
          api_location: "/graphql/" # A
```
3. After completing the above, whenever you push to main your code will be auto-deployed to the cloud!

### Run backend (nosql) in the cloud
1. Follow [this quickstart to create a Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/sql/create-cosmosdb-resources-portal)  For low use, or just getting started a "serverless" Cosmos will be adequate and cost pennies per month.
2. Once done copy the connection string for this Azure Cosmos DB 
3. Set up to use Cosmos DB from local dev: add connection string to graphql\local.settings.json ex:
```json
{
  "IsEncrypted": false,
  "Values": {
    "cosmos":"<your connection string",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true"
  }
}
```

4. Set up to use Cosmos DB from cloud: open your Azure Static Website in the Azure Portal and click on Configuration.  Add an app setting named cosmos with a value of the connection string.
   

## Scale up in the Cloud

1. [Add a custom domain to your static site]()
2. Increase throughput of Azure Cosmos DB:
3. Add additional indexes to Azure Cosmos DB:















# Maturity Model
## How It Starts
* Develop 100% locally
* Customize your front-end
* Use a file "JSON backend"
* Customize your GraphQL schema

## How it matures
* Setup Continuous Deployment 
* Host for free in the cloud (with SSL)
* Continue using a file-based backend
OR
* Transition to a No-SQL backend

## How it Ends
(optional)
* Use a custom domain name
* Scale cloud hosting to meet demand
* Scale  nosql to scale backend



Your app can then be scaled up to support
* Thousands of users
* Global distribution
* Scaled up security
* Additional backeds

This is a starter kit. It shows you how to create and deploy the basic platform.  You'll need to adapt the a] to include your won code to solve your specific task.  Depending on the complexity of your app, or use of other Azure service it might cost you more than $1 to run this app. 

## How to Use
You can run this app locally or in Azure.  Typically you will need to do the following:
1. Develop your own GraphQL Schmea
2. Modify the React APP buisness logic.
3. Modify the React APP UI/UX.
4. Modify NoSQL index properties
5. Modify NoSQL queries to reduce operations

## What is this?


# Detailed Description
## React App
This is a Create React App with only Functional components. 
It uses:
* Apollo Client: to execute graphql queiries and mutations
* React Router: to select which component to render
* React Bootsrap: as a UI Library

URL: http://localhost:3000

## GraphQL
This app uses Apollo GraphQL server.
Schmea from graphql/schema.js
Datasources/HardcodedAPI.js or datasources/CosmosAPI.js.  It selects Cosmos is local.settings.json or an app setting contains cosmos.
Resolvers: are coded into index.js 

CORS: by default the app also sends cors headers in non prod environments (so that localhost:3000 can access data)

Playground: Prod: DISABLED.  Local: http://localhost:7071/api/graphql


## NoSQL
If you have not setup CosmosDB yet then graphql\datasources\HardCodedAPI.js is used as a datasrouce
At the top of the file is the const that defines the data.

### Notes
1. You'll need to index the 'posted' field in order to use the ORDER DESC
2. How do I pull changes from the original repo into my repo?
```
git remote add upstream https://github.com/microsoft/react-graphql-nosql-starter-kit
git fetch upstream
git merge upstream/main main
git push
```

# What do I do now?

# Refernce Links
* [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)
* [Cosmos DB](https://azure.microsoft.com/en-us/services/cosmos-db/)

# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
