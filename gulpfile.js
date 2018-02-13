/****************************************************************
 * Deklarasi Variable untuk package dan library yang di gunakan *
 *                                                              *
 * $ npm install gulp gulp-sass gulp-postcss tailwindcss \      *
 *   browser-sync --save                                        *
 ***************************************************************/

var gulp        = require('gulp');

var sass        = require('gulp-sass');

var postcss     = require('gulp-postcss');

var path        = require('path');

var tailwindcss = require('tailwindcss');

///var browserSync = require('browser-sync').create();


/****************************************************************
 * Deklarasi Variable source, build, configname                 *
 * source : folder yang berisikan file sass,css,scss            *
 * build  : folder untuk menyimpan hasil dari source            * 
 * configname: nama file config tailwindcss yang di dapat dari  *
 * $ node_modules/./bin/tailwindcss init <namaconfig>           *
 * $ # outputnya dalam bentuk <namaconfig>.js                   *
 *                                                              *
 * variable watchList berisi fungsi untuk mengecheck perubahan  *
 * pada source berdasarkan extensi                              *
 ***************************************************************/
var source      = 'src',
    build       = 'public',
    configname  = 'ri7nz',
    watchList   = (action, list=[]) => {
        if (  list.length  <= 0 ){
            list   = [
                'css',
                'sass',
                'scss',
                // Silahkan tambahkan extensi file css/less/sass/etc
            ];
        }

        if ( typeof action === 'string' )
            action = [action];

        list.map((ext) => {
            gulp.watch( `${source}/**/*.${ext}`, action);
        });
};

/****************************************************************
 *     $ gulp style # untuk menjalankan fungsi dibawah ini      *
 ***************************************************************/
gulp.task( 'style', () => {

    /**
     * require precss & postcss-import untuk menyelesaikan
     * masalah @import pada scss sass
     */
    let plugins = [
         require('precss'),
         require('postcss-import'),
         tailwindcss( `./${configname}.js` ),
         require( 'autoprefixer' ) 
    ]; 

    return gulp.src( `${source}/**/*.scss` )
            .pipe(postcss(plugins))
            .pipe( sass().on('error', sass.logError) )
            .pipe( gulp.dest( `${build}/` ) );
});

/****************************************************************
 *     $ gulp  # untuk menjalankan fungsi dibawah ini           *
 ***************************************************************/
//gulp.task( 'live', ['style'], function()  {
//
//    browserSync.init({
//        server: {
//            baseDir: './'
//        } 
//    });
//
//    watchList('style'); 
//    gulp.watch( './**/*.html' ).on("change", browserSync.reload);
//    gulp.watch( "./**/*.js" ).on("change", browserSync.reload);
//
//});

/****************************************************************
 *     $ gulp  # untuk menjalankan fungsi dibawah ini           *
 ***************************************************************/
gulp.task( 'default', () => {
    watchList('style'); 
    //gulp.watch( source + '/**/*.scss', ['style']);
} );
