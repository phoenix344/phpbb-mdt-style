const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const livereload = require("gulp-livereload");
const plumber = require('gulp-plumber');

gulp.task("sass", async () => {
  gulp
    .src("theme/style.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("theme/"));
});

gulp.task("css", async () => {
  return gulp
    .src("theme/style.css")
    .pipe(plumber())
    .pipe(postcss([autoprefixer(), cssnano()]).on('error', err => {
      console.log(err);
    }))
    .pipe(gulp.dest("theme/"))
    .pipe(livereload());
});

gulp.task('watch', async () => {
  livereload.listen();
  gulp.watch("theme/**/*.scss", gulp.series("sass", "css"));
  gulp.watch(
    ["template/**/*", "theme/assets/**/*.js"],
    { events: "all" },
    async () => livereload.reload()
  );
});
