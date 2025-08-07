const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/shop',(req,res,next)=>
{
//  res.sendFile(path.join(rootDir,'views', 'shop.html')); 
 const products = adminData.products;
 res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;