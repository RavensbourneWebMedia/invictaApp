module.exports = function(grunt) 
{
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		uglify: 
		{
			my_target: 
			{
				files: 
				{
					'../js/app.min.js': 
					[
						'../js/libraries/jquery.js',
						'../js/libraries/jquery.audioPlayer.js',
						'../js/libraries/jquery.slick.js',
						'../js/audios.js', 
						'../js/menu.js', 
						'../js/sliders.js', 
						'../js/videos.js'
					]
				}
			}
		},

		uncss: 
		{
			dist: 
			{
				files: 
				{
					'../css/app.css': ['../index.dev.html']
				}	
			}
		},

		cssmin: 
		{
			options: 
			{
    		sourceMap: true
  		},
			target: 
			{
				files: 
				{
					'../css/app.min.css': 
					[
						'../css/*.css', 
						'!../css/*.min.css'
					]
				}
			}
		},

		htmlmin: 
		{
			dist: 
			{
				options: 
				{
					removeComments: true,
					collapseWhitespace: true
				},
				files: 
				{
					'../index.html': '../index.grunt.html'
				}
			}
		}  

	})
	
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin')
	grunt.loadNpmTasks('grunt-uncss')
	grunt.loadNpmTasks('grunt-contrib-htmlmin')

	grunt.registerTask('default', ['uglify', 'cssmin', 'htmlmin'])
}