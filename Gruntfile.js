//***********   GRUNT NEEDS ***************//
//  npm install grunt --save
//  npm install grunt-contrib-copy --save
//  npm install grunt-contrib-uglify --save
//  npm install grunt-contrib-jshint --save
//  npm install grunt-contrib-watch --save
//
//***********   GRUNT USES  ***************//
//  vendors:  jquery, bootstrap
//  client/app.js
//
//


//
// Gmail API
// Project ID
// parentjournal-1264
// Project number
// 520227212555
//
//Email address	parentjournal-1264@appspot.gserviceaccount.com
//
// Key IDs	6cb138d7a3b513c174a0d713f361418c6f15e870


module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'client/app.js',
        dest: 'server/public/assets/scripts/app.min.js'
      }
    },
    jshint:{
      files:'client/app.js'
    },
    watch: {
      scripts:{
        files:'client/app.js',
        tasks: ['jshint', 'uglify'],
        options:{
          spawn: false
        }
      }
    },
    copy: {
      angular: {
        expand: true,
        cwd: "node_modules/angular",
        src: [
          "angular.min.js",
          "angular.js",
          "angular.min.js.map"
        ],
        dest: "server/public/vendors/"
      },
      angularroute: {
        expand: true,
        cwd: "node_modules/angular-route",
        src: [
          "angular-route.min.js",
          "angular-route.js",
          "angular-route.min.js.map"
        ],
        dest: "server/public/vendors/"
      },
      // jQuery: {
      //   expand: true,
      //   cwd: "node_modules/jquery/dist/",
      //   src: [
      //     "jquery.min.js",
      //   ],
      //   dest: "server/public/vendors/"
      // },
      bootstrap: {
        expand: true,
        cwd: "node_modules/bootstrap/dist/css/",
        src: [
          "bootstrap.min.css",
          "bootstrap.min.css.map"
        ],
        dest: "server/public/vendors"
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['copy','uglify','jshint']);

}
