/**
 * used to aid me compile my js and scss files for distribution
 */

let mix = require('laravel-mix');

mix.config.publicPath ='./dist';

mix.sass('src/accordionjs.scss',  './dist/accordionjs.min.css')
    .js('src/accordionjs.js', './dist/accordionjs.min.js');

// //-- Copy the processed files to the exmples folder as well
// mix.copy('./dist/accordionjs.min.css', './Examples/assets/accordionjs.min.css');
// mix.copy('./dist/accordionjs.min.js', './Examples/assets/accordionjs.min.js');
