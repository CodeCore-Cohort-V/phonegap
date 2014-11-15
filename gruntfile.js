module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          // target.css file: source.less file
          "www/css/app.css": "www/css/*.less"
        }
      }
    },
    coffee: {
      scripts: {
        expand: true,
        flatten: false,
        cwd: 'www/js/**/*',
        src: ['*.coffee'],
        dest: 'www/js/',
        ext: '.js'
      },    
      views: {
        expand: true,
        flatten: false,
        cwd: 'www/views',
        src: ['**/*.coffee'],
        dest: 'www/views',
        ext: '.js'
      }    
    },    
    watch: {
      styles: {
        files: ['www/css/**/*.less'], // which files to watch
        tasks: ['less'],
      },
      scripts: {
        files: ['www/js/**/*.coffee'],
        tasks: ['coffee']
      },      
      views: {
        files: ['www/views/**/*.coffee'],
        tasks: ['coffee']
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
};