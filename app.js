const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));

// app.use(adminroutes);
app.use('/admin',adminroutes);
app.use(shoproutes);

app.use((req,res,next)=>{
   res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000);
 
// const port = 3000;
 
// server.listen(port,()=>{
//     console.log(`Secure server is running at http://localhost:${port}`)
// })