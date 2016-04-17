/*
 * Create a build task to build a deployment ready version of the app in a dist/ folder
 */

module.exports = function (grunt) {
    // Project configuration

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'App/SASS/',
                        src: ['**/*.scss'],
                        dest: 'App/public/stylesheets/',
                        ext: '.css'
                    }
                ]
            }
        },
        ntypescript: {
            options: {
                project: '.'
            },
            files: ['App/Angular/**/*.ts']
        },
        watch: {
            sass: {
                files: ['App/SASS/**/*.scss'],
                tasks: ['sass']
            },
            typescript: {
                files: ['<%= ntypescript.files %>'],
                tasks: ['ntypescript']
            }
        },
        clean: {

        },
        copy: {
            /*prod: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= variables.tags %>/<%= pkg.name %>-<%= grunt.option("tag") %>',
                        src: ['**'],
                        dest: '<%= variables.prod %>'
                    }
                ],
                options: {
                    nonull: true
                }
            }*/
        },
        uglify: {

        },
        cssmin: {

        }
    });

    // Load all the Grunt tasks specified in package.json'dependencies sections

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'ntypescript'],
        scope: 'devDependencies'
    });

    /*
     * Uncomment to load the custom Grunt tasks located in the GruntCustomTasks folder,
     * the ones that you make !!!
     */
    //grunt.loadTasks('GruntCustomTasks');

    // Register the default task

    grunt.registerTask('default', ['watch']);
};
