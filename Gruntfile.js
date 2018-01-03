module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'styles/style.css': 'styles/style.scss'
  			}
  		}
  	},
	
	watch: {
		scripts: {
			files: ['*.scss'],
			tasks: ['sass'],
			options: {
				spawn: false,
			},
		}
	}

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).

  grunt.registerTask('default', ['sass', 'watch']);
};