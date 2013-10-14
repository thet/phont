module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'src/dist/phont.min.css': [
                        'src/css/keyboard.css',
                        'src/css/phont.css'
                    ]
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/lib/Audiolet/src/audiolet/Audiolet.js',
                    'src/lib/jQuery-Knob/js/jquery.knob.js',
                    'src/lib/Recorderjs/recorder.js',
                    'src/lib/wavencoderjs/wavencoder.js',
                    'src/js/rec.js',
                    'src/js/phont.js',
                    'src/js/phont-key.js',
                    'src/js/phont-init.js',
                    'src/js/knob.js',
                ],
                dest: 'src/dist/phont.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['cssmin', 'concat']);

};
