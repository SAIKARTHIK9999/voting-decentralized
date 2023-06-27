const exp = require('express');
const server = exp();
require('dotenv').config();
const mclient = require('mongodb').MongoClient;
const DBurl = process.env.DATABASE_CONNECTION_URL;
const path = require('path');
const userApp = require('./APIS/userApi');

server.use('/user', userApp);
mclient
  .connect(DBurl)
  .then((client) => {
    let DBobj = client.db('votedb');
    let userscollectionObj = DBobj.collection('userscollection');
    server.set('userscollection', userscollectionObj);
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.log('Error occurred in DB connection:', err);
  });


server.use(exp.static(path.join(__dirname, './build')));

server.use('*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'));
});

server.use((error, request, response, next) => {
  response.send({ message: 'Error occurred', reason: `${error.message}` });
});

server.use((request, response, next)=>{
    response.send({message:`path ${request.url} is invalid`})
})

const port = process.env.PORT;
server.listen(port, () => console.log(`Server listening on ${port}`));
