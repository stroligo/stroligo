const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config");

const sass = require("gulp-sass")(require("sass")); // Podemos usar LESS
const postcss = require("gulp-postcss"); // Compilar tailwind com as configs
const concat = require("gulp-concat");
const uglify = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const purgecss = require("gulp-purgecss");
const logSymbols = require("log-symbols");

//Tasks

function devStyles() {
  const tailwindcss = require("tailwindcss");
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs)]))
    .pipe(concat("style.css"))
    .pipe(dest(options.paths.build.css))
    .pipe(dest(options.paths.wordpress.css));
}
function devScriptsClasses() {
    return src([`${options.paths.src.js}/class/*.js`])
      .pipe(concat({ path: "classes.js" }))
      .pipe(dest(options.paths.build.js))
      .pipe(dest(options.paths.wordpress.js));
  }

function devScripts() {
  return src([`${options.paths.src.js}/*.js`])
    .pipe(concat({ path: "scripts.js" }))
    .pipe(dest(options.paths.build.js))
    .pipe(dest(options.paths.wordpress.js));
}

function watchFiles() {
  watch(
    [
      options.config.tailwindjs,
      `${options.paths.src.css}/**/*.scss`,
      `${options.paths.src.css}/**/*.less`,
      `${options.paths.base}/**/*.{html,js,php}`,
      `${options.paths.src.js}/**/*.js`,
    ],
    series(devStyles)
  );
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, devScriptsClasses));
  console.log("\n\t" + logSymbols.info, "Aguardando por mudanças..\n");
}

function buildFinish(done) {
  console.log(
    "\n\t" + logSymbols.info,
    `Build feita, os arquivos estão em: ${options.paths.build.base}\n`
  );
  done();
}

exports.default = series(
  parallel(devStyles, devScripts, devScriptsClasses),
  watchFiles // Vigiando arquivos para verificar mudanças
);

exports.prod = series(parallel(devStyles, devScripts, devScriptsClasses), buildFinish);
