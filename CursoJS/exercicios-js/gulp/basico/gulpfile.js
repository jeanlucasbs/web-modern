const gulp = require('gulp') //importanter o gulp

//const {series, parallel} = require('gulp')
const parallel = gulp.parallel

//Pode fazer um dos dois
//const {series} = require('gulp') //importar de dentro do gulp o series. Fazer varias tasks em serie
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa antes 2')
    return cb()
}

function copiar(callback){
    //Ele vai copiar os arquivos da pasta de origem para a pasta de destino
    //Utiliza o gulp.src para selecionar os arquivos e o pipe para aplicar uma transformação
    //o gulp.dest vai copiar os arquivos para a pasta de destino
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']).pipe(gulp.dest('pastaB'))
    return callback
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(fim,antes1),
    copiar,
    antes2,
    )