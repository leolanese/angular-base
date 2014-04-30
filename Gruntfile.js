module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../deploy/',
            jasmine: 'tests/jasmine/',
            root: '/Users/Leo/Documents/root/angular-base',
            www: '/Users/Leo/Documents/root/angular-base/www'

        },

        // Compiles SASS (with Compass) into CSS.
        compass: {                  // Task

            dist: {                   // Target

                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',

                    environment: 'production',
                    outputStyle: 'compact'
                },
                files: {
                    '<%= meta.root  %>/app/css/main.css' : '<%= meta.root  %>/scss/main.scss'
                }
            }

        },

        // Compiles SASS into CSS.
        sass: {

            dist: {  // Target
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    sourcemap: false
                },
                files: {
                    '<%= meta.root  %>/app/css/main.css' : '<%= meta.root  %>/scss/main.scss'
                }
            }
        },

        // Lints compiled CSS files for errors or bad practice: https://github.com/CSSLint/csslint/wiki/Rules
        csslint: {
            options: {
                'adjoining-classes': false,
                'box-model': true,
                'box-sizing': false,
                'bulletproof-font-face': 2,
                'display-property-grouping': true,
                'duplicate-background-images': true,
                'duplicate-properties': true,
                'empty-rules': 2,
                'fallback-colors': true,
                'import': 2,
                'important': true,
                'known-properties': 2,
                'overqualified-elements': true,
                'unqualified-attributes': 2,
                'underscore-property-hack': 2
            },
            src: ['app/css/*.css']
        },

        // Concatenates and minifys the following tasks.
        uglify: {

            options: {
                banner: '',
                beautify: true,
                preserveComments: false
            },
            dist: {
                src: [
                    /*
                    'js/libs/handlebars.js',
                     'js/libs/swfobject.js',
                     'js/src/Player.js',
                     */
                    'app/js/src/main.js'
                ],
                dest: 'app/js/build.min.js'
            }
        },


        requirejs: {
            compile: {
                options: {
                    baseUrl: "path/to/base",
                    mainConfigFile: "path/to/config.js",
                    name: "path/to/almond", // assumes a production build using almond
                    out: "path/to/optimized.js"
                }
            }
        },

        jshint: {
            options: {
                // Specifying JSHint options and globals
                jshintrc: '.jshintrc'
            },
            files: ['Gruntfile.js', './js/lib/*.js']  // libext are not under jshint
        },


        jasmine: {
            pivotal: {
                src: '<%= jasmine =>/src/**/*.js',
                options: {
                    specs: '<%= jasmine =>/spec/*Spec.js',
                    helpers: '<%= jasmine =>/spec/*Helper.js'
                }
            }
        },

        // The responsive_images task will take your source image and
        // create images at different resolutions for use
        // needs: GraphicsMagick or ImageMagick
        // brew install GraphicsMagick
        // or
        // brew install ImageMagick
        responsive_images: {
            myTask: {
                options: {
                    sizes: [{
                        name: "small",
                        width: 320
                    },{
                        name: 'medium',
                        width: 640
                    },{
                        name: 'large',
                        width: 1024
                    }]
                },


                files: [{
                    expand: true,
                    src: ['<%= meta.root  %>/img/source/**.{jpg,gif,png}'],
                    cwd: '',
                    custom_dest: 'img/size/{%= width %}/'
                }]
            }
        },

        uncss: {
            dist: {
                options: {
                    ignoreSheets : [/fonts.googleapis/]
                },
                files: {
                    // HTML files you would like scanned
                    'css/main.css': ['./index.html']
                }
            }
        },

        ngmin: {
            controllers: {
                src: ['test/src/controllers/one.js'],
                dest: 'test/generated/controllers/one.js'
            },
            directives: {
                expand: true,
                cwd: 'test/src',
                src: ['directives/**/*.js'],
                dest: 'test/generated'
            }
        },

        // problems?
        // ps aux | grep karma
        // kill -9 iD
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                background: true
            }
        },

        // watching tasks
        watch: {
            options: {
                interrupt: true
            },

            // run unit tests with karma (server needs to be already running)
            karma: {
                files: ['app/js/**/*.js', 'test/browser/**/*.js'],
                tasks: ['karma:unit'] //NOTE the :run flag
            },


            // Watch for sass changes, building CSS directly
            css: {
                // Which files to watch (all .scss files recursively in the scss directory)
                files: ['<%= meta.root  %>/scss/*.scss'],
                tasks: ['sass:dist'],
                options: {
                    nospawn: true
                }
            },

            // Watch for JS changes, linting the JS and copying direct to deployment directory.
            scripts: {
                files: ['Gruntfile.js', 'server.js', '<%= meta.root  %>/js/lib/*.js', '<%= meta.www  %>/tests/**/*.js'],
                tasks: ['jshint', 'uglify:dist']
            },


            // Watch for SASS changes, building CSS directly into deployment directory.
            sass: {
                files: ['<%= meta.root %>/scss/**/*.scss'],
                tasks: ['compass:dist']
            }
        }

    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-ngmin'); // add the [] for production uglify
    grunt.loadNpmTasks('grunt-karma');

    // Task definitions
    grunt.registerTask('default', ['watch', 'karma', 'jshint', 'compass', 'csslint', 'uglify', 'requirejs' ]);
};