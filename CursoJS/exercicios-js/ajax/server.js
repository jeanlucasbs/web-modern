const bodyParser = require('body-parser')//
const express = require('express')
const app = express() //instanciar o express e colocado dentro de uma variavel

//middleware nada mais é que uma função que irá ser executada quando uma determinada requição chegar
app.use(express.static('.'))//dentro da pasta atual sirva os arquivos estaticos
app.use(bodyParser.urlencoded({extended: true}))//se vier algum formato a partir de um submite de um formulario, irá ser resposanvel por tranforma-lo
app.use(bodyParser.json())//isso vai ser execultado se dentro da requição vier um JSON, para transformar o JSON em objeto

app.get('/teste', (req, res) => res.send('Ok'))//quando vier uma req do tipo get, nessa url do tipo test, chame a função
app.listen(8080, () => console.log('Execultado...'))