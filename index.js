require('dotenv').config();
//the above imports the dotenv and then looks for the .env file which tells process.env what the port is going to run on


const server = require('./api/server.js'); // import from the api file server.js

//proccess.env is object variable given from express
//install the package npm install dotenv
port = process.env.PORT;
// need to add .env to the gititnore


//process .env.PORT= 4000; if wanted to set this up manually.. but we want this to be accessable from outside the code

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});