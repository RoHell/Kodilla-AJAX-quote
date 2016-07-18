module.exports = function(grunt) {
	grunt.initConfig({
		
    	watch: {

	  		scripts: {
	    		files: ['**/*.css'],
	    		tasks: ['css'],
	    		options: {
	        		spawn: false,
	    		}
	  		}
		},

		browserSync: {
	      	server: {
	        	bsFiles: {
	          		src : [
	            		'css/*.css',
	            		'*.html',
	            		'js/*.js',
	          		]
	        	},
	        	options: {
	          		watchTask: true,
	          		server: {
	          			baseDir: './'
	          		}
	        	}
	      	}
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', ['browserSync', 'watch']);
};