const gulp = require('gulp')
const htmllint = require('gulp-htmllint')
const fancyLog = require('fancy-log')
const colors = require('ansi-colors')

const htmllintReporter = (filepath, issues) => {
    if (issues.length > 0) {
        issues.forEach((issue) => {
            fancyLog(colors.cyan('[gulp-htmllint] ') + colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + colors.red('(' + issue.code + ') ' + issue.msg))
        })
        process.exitCode = 1
    }
}

const htmlchecker = () => {
    return gulp.src('./htmls/*.html').pipe(htmllint({}, htmllintReporter))
}

exports.htmlchecker = htmlchecker
exports.default = htmlchecker