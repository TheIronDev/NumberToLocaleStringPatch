module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine: {
			testCases: {
				src: 'numberToLocaleStringFix.js',
				options: {
					specs: 'tests/numberToLocaleStringSpec.js'
				}
			}
		},
		jshint: {
			all: ['Gruntfile.js', 'numberToLocaleStringFix.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'jasmine']);
};
