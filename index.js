const express = require('express');
const app = express();

require('dotenv').config();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
//  var cors = require('cors');
//  app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.get('/', (req,res)=>{res.sendFile(__dirname + "/public/index.html");});

app.get('/api/whoami', (req, res)=>{
    res.json({"ipaddress": req.ip, "language": req.headers["accept-language"], "software": req.headers["user-agent"]});
});

app.listen(process.env.PORT, ()=>{
    console.log("server listening...");
});