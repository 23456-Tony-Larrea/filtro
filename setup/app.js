;
const express = require('express'),
bodyParser = require('body-parser')

let app = express(),
rutas = require('../api/ruta')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE')
    res.header('Allow','GET, POST, PUT, DELETE')
    next()
})

app.use('/server',rutas)
module.exports=app;

/* const express = require('express')
const app = express()
const port = 3000

const knex = require('./db');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function busqueda() {
    console.log('ENTRA_AQUÍ!!');
    var Twit = require('twit');
    var config = require('./config');
    var T = new Twit(config);
    var numero = 8;
    var params = {
        q: ('#emprendimiento', '#webinar'),
        count: numero
    }
    T.get('search/tweets', params, searchedData);


    function searchedData(err, data, response) {
        console.log(data);
        var con = 0;
        for (con = 0; con < numero; con++) {
            knex('eventos').insert([{
                id_tw: data.statuses[con].id,
                texto: data.statuses[con].text,
                fecha: data.statuses[con].created_at
            }
            ]).then(data => { console.log(data) }).catch(err => { console.log(err) });

            //  console.log("numero",con+1,data.statuses[con].id,"texto", data.statuses[con].text,"fecha",data.statuses[con].created_at );

        }

    }

    function consel() {
        knex.select('texto').table('eventos').then(function (consul) {
            console.log(consul);
            //document.getElementById("texto").innerHTML = consul;

        });

    }
    consel();
}
setInterval(busqueda, 5000);
 */