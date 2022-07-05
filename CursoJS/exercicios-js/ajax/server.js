const bodyParser = require('body-parser')//
const express = require('express')
const app = express() //instanciar o express e colocado dentro de uma variavel

//middleware nada mais é que uma função que irá ser executada quando uma determinada requição chegar
app.use(express.static('.'))//dentro da pasta atual sirva os arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}))//se vier algum formato a partir de um submite de um formulario, irá ser resposanvel por tranforma-lo
app.use(bodyParser.json())//isso vai ser execultado se dentro da requição vier um JSON, para transformar o JSON em objeto

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }

        res.end('Concluido com sucesso.')
    })
})

app.get('/teste', (req, res) => res.send('Ok'))//quando vier uma req do tipo get, nessa url do tipo test, chame a função
app.listen(8080, () => console.log('Execultado...'))