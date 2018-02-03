const express = require('express');
const app = express();
const router = require('./router');
app.use('/node_modules',express.static('./node_modules/'));
app.use('/public',express.static('./public/'));
app.use(router);