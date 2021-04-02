const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const livereload = require("gulp-livereload");

gulp.task("sass", async () => {
  gulp
    .src("theme/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("theme/"));
});

gulp.task("css", async () => {
  return gulp
    .src("theme/style.css")
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("theme/"))
    .pipe(livereload());
});

gulp.task("watch", async () => {
  livereload.listen();
  gulp.watch("theme/**/*.scss", gulp.series("sass", "css"));
  gulp.watch("theme/template/**/*.html", { events: "all" }, async () => {
    livereload.reload();
  });
});
