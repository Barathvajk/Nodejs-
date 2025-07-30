const path = require('path');

const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(adminroutes);
// app.use(shoproutes);

app.use('/admin',adminroutes);
app.use('/shop',shoproutes);

app.use('/',(req,res,next)=>{
   res.send('FROM HOME PAGE');
});

app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
 
// const port = 3000;
 
// server.listen(port,()=>{
//     console.log(`Secure server is running at http://localhost:${port}`)
// })