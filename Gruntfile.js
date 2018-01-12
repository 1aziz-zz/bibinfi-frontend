const webpackConfig = require('./webpack.config');


module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        webpack: {
            dev: Object.assign({ watch: true }, webpackConfig)
          }
       });
    
      grunt.loadNpmTasks('grunt-webpack');
    };
    