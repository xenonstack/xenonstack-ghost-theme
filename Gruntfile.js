module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options:{
                banner : '/*' +
                ' * XenonStack.com' +
                ' * Authors: Ankita Dhimam (https://github.com/xankdhi), Abhay Arora (https://github.com/itsstark)' +
                ' * Copyright (c) 2016, XenonStack LLC.' +
                ' */',
                sourceMap: true
            },
            my_target: {
                files: {
                    'assets/js/xenonstack.min.js': [ 'src/js/vendor/*.js', 'src/js/*.js']
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
                    'assets/css/xenonstack.min.css': ['src/css/vendor/*.css', 'src/css/*.css', 'src/tmp/css/*.css']
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/images/'
                }]
            }
        },
        copy: {
            fonts: {
                cwd: 'src/fonts/',
                src: '*',
                dest: 'assets/fonts/',
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'imagemin', 'copy', 'watch']);
};
