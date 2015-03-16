/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.less` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-less
 */
module.exports = function(grunt) {

    grunt.config.set('sass', {
        options: {
            includePaths: ['bower_components/foundation/scss'],
            sourceMap: true
        },
        dist: {
            options: {
                outputStyle: 'compressed'
            },
            files: {
                '.tmp/public/styles/app.css': 'assets/styles/app.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};