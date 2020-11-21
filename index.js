const express = require('express');
const cors = require('cors');
const fs = require("fs");
const path = require('path');
//Create Server
const app = express();

const env = process.argv[2];
console.log(process.argv)

if(env === "dev") {
    const data = {
        name: env,
        apiUrl: "http://development.api.reports/",
        id:2
    }
    fs.writeFileSync("./public/assets/files/properties.json", JSON.stringify(data));
}else {
    const data = {
        name: env,
        apiUrl: "http://production.api.reports/",
        id:3
    }
    fs.writeFileSync("./public/assets/files/properties.json", JSON.stringify(data));
}

//cors
app.use(cors())

//Public directory
app.use( express.static('public'));

app.get('*', ( req, res ) => {   
    res.sendFile( path.join( __dirname+'/public/index.html' ) );
});


//Listen to petitions
const port = process.env.PORT || 4000
app.listen( port, ()=>{
    console.log(`Server running in port ${port}`)
} )