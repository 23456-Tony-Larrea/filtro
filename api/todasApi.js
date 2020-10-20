;
const express = require('express')
const api = express.Router(),
rutasControl=require('../controladores/controladores')

api.get('/get', rutasControl.getDatos);
api.get('/prueba', rutasControl.busqueda);

module.exports = api