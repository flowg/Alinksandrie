/*
 * This is an example of how to make your own Grunt task.
 * This one checks if a version release has been provided on command line
 * and passes it to Grunt.
 */

module.exports = function (grunt) {
    grunt.registerTask('checkVersion', 'Checks if version release has been provided and pass it to Grunt', function () {
        var bool = (typeof(grunt.option('tag')) === 'number' || typeof(grunt.option('tag')) === 'string') && grunt.option('tag') !== 0;

        if (!bool) {
            grunt.fatal('Please provide a valid version number (not null) for tagging of this release\nYou should type "grunt build --tag=X.X.X"');
        }

        grunt.config.set('pkg.version', grunt.option('tag'));
        grunt.file.write('package.json', JSON.stringify(grunt.config('pkg')));
    });
};
