module.exports = function(grunt) {
    grunt.initConfig({
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    "dist/index.html": ["src/jade/index.jade"],
                    "dist/search/index.html": ["src/jade/search/index.jade"]
                }
            }
        },
        uglify: {
            options:{
                banner : '/*' +
                ' * RayFarm' +
                ' * Author: Abhay Arora (https://github.com/itsstark)' +
                ' * Copyright (c) 2016, RayFarm.' +
                ' */',
                sourceMap: true
            },
            my_target: {
                files: {
                    'dist/js/rayfarm.min.js': [ 'src/js/vendor/*.js', 'src/js/*.js']
                }
            }
        },
        less: {
            production: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "src/tmp/css/compiled.css": "src/less/*.less"
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/rayfarm.min.css': ['src/css/vendor/*.css', 'src/css/*.css', 'src/tmp/css/*.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/'
                }]
            }
        },
        copy: {
            fonts: {
                cwd: 'src/fonts/',
                src: '*',
                dest: 'dist/fonts/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            favicon: {
                cwd: 'src/favicon/',
                src: '*',
                dest: 'dist/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            }
        },
        watch: {
            jade: {
                files: ['src/jade/**/*.*'],
                tasks: ['jade'],
                options: {
                    spawn: false,
                },
            },
            js: {
                files: ['src/js/**/*.*'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/css/**/*.*', 'src/less/*.*'],
                tasks: ['less', 'cssmin'],
                options: {
                    spawn: false,
                },
            },
            images: {
                files: ['src/images/**/*.*'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                },
            },
            copy: {
                files: ['src/fonts/**/*.*', 'src/favicon/**/*.*'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                },
            },
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['jade', 'uglify', 'less', 'cssmin', 'imagemin', 'copy', 'watch']);
};