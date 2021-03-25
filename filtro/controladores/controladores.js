;
let config = require('../knexfile')
let env = 'development'
let db= require('knex')(config[env])

let getDatos = (req,res)=>{
    let tabla = req.query.tabla
    let campos = req.query.campos
    db.select(campos).from(tabla).then(resultado=>{
        return res.status(200).json({
            oK:'true',
            datos: resultado
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            oK:'false',
            datos: null,
            sms: `Error del servidor ${error}` 
    })
})
}

let busqueda = (req, res) => {
    db.raw('select DISTINCT id_tw,texto from nuevos_datos_bot where texto like"%https%" and texto not like "RT%" and texto like"%jueves%" or texto like"%#ágiles%" or texto like "%Ahora el Ph.D Carlos%" or texto like "%Actividades Productivas e Investigativas Asociadas a Biodiversidad%" or texto like "%Ahora MSc%" or texto like"%Prácticas%" or texto like "%Te recordamos, mañana%" or texto like"%#Webinar | Mañana a las 10 hs%" or texto like "%[MAÑANA] #Webinar organizado%" or id_tw like "%1316151732662153200%" or texto like "%¿Quieres mejorar el Ahorro Energético y Bombeo solar? Conéctate mañana 14 de octubre%" or texto like"%#DíaDTeletrabajo%" or texto like "%Este sábado%" or texto like "%#webinar sobre #tecnología%" or id_tw like "%1306681847255117800%" or texto like "%#Bitcoin%" or texto like"%retransmisión%" or texto like "%#Webinar de la semana%"or texto like"%siguiente semana%" or texto like "%Semana de la Salud Mental%" or texto like"%#OrganizacionesSanitarias%" or id_tw like "%1316104421718339600%" or texto like"%@SernamEG_VI%" or texto like"%#WEBINAR: La Respuesta Humanitaria%" or id_tw like"%1316156216805032000%" or texto like "%próximos días%" or texto like "%En 2 días podrá conocer%" or texto like "%#Webinar Internacional%" or id_tw like "%1316140545434161200%" or id_tw like"%1316141317169328000%" or texto like"%Continua el #Webinar%" or id_tw like "%1316142565192798200%" or id_tw like "%1316143241553678300%" or texto like "%En este webinar gratuito%" or texto like "%EN VIVO | ll Encuentro Empresarial Virtual%" or texto like "%La Respuesta Humanitaria%" or texto like "%tratamiento%" or texto like "%hallazgos y desafíos%" or texto like "%MovilidadEléctrica%" or texto like "%#Webinar: Este 16 de octubre tenemos un webinar%" or id_tw like "%1316151733660397600%" or texto like "%PorSiTeLoPerdiste%" or texto like "%Energético%"')
        .then(response => {
            return res.status(200).json({
                ok: 'filtrado',
                datos: response
            })
        }).catch((error) => {
            return res.status(500).json({
                ok: 'false',
                datos: null,
                mensaje: `Error del servidor: ${error}`
            })
        })
}


module.exports = {
    getDatos,
    busqueda
}