const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function forma(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,//os arquivos de comentarios nao vao ser transferidos
            presets: ["env"]//pega o versao de javascript mais recente e converte para uma antiga
        }))
        .pipe(uglify()) //minifica os arquivos.Minificar é vc retirar espaços, tabulações, comentarios, etc.
        .pipe(concat('codigo.min.js'))// vai juntar todos os arquivos nesse novo arquivo
        .pipe(gulp.dest('build'))
    
    return callback
}

exports.default = series(forma)