module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'sass:dist',
		'copy:dev',
        'browserify'
	]);
};
