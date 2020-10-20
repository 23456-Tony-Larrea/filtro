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
    db.raw('select DISTINCT id_tw,texto from nuevos_datos_bot where texto like"%https%" and texto like"%jueves%" or texto like"%#ágiles%" or texto like"%AHORA%" or texto like"%Prácticas%" or texto like "%mañana%" or texto like "%@CaemEdomex%" or texto like"%#DíaDTeletrabajo%" or texto like "%Este sábado%" or texto like "%#tecnología%" or texto like "%#español%" or texto like "%#Bitcoin%" or texto like"%retransmisión%" or texto like "%semana%" or texto like"%#OrganizacionesSanitarias%" or texto like "%días%" or texto like "%#Webinar Internacional%" or texto like "%#PobrezaEnergética%" or texto like"%Continua el #Webinar%" or texto like "%Empezamos%" or texto like "%En este webinar gratuito%" or texto like "%EN VIVO%" or texto like "%La Respuesta Humanitaria%" or texto like "%Te invitamos%" or texto like "%tratamiento%" or texto like "%desafíos%" or texto like "%MovilidadEléctrica%" or texto like "%octubre%" or texto like "%PorSiTeLoPerdiste%" or texto like "%Energético%"')
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