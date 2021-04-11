import gulp from 'gulp';
import postcss from "gulp-postcss";
import sass from "gulp-sass";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import livereload from "gulp-livereload";
import plumber from "gulp-plumber";

gulp.task("sass", async () => {
  gulp
    .src("theme/assets/style.scss")
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("theme/assets/"));
});

gulp.task("css", async () => {
  return gulp
    .src("theme/assets/style.css")
    .pipe(plumber())
    .pipe(
      postcss([
        // stylehacks(),
        autoprefixer(),
        cssnano(),
      ]).on("error", (err) => {
        console.log(err);
      })
    )
    .pipe(gulp.dest("theme/assets/"))
    .pipe(livereload());
});

gulp.task("watch", async () => {
  livereload.listen();
  gulp.watch("theme/assets/**/*.scss", gulp.series("sass", "css"));
  gulp.watch(
    ["template/**/*", "theme/assets/**/*.js", "theme/assets/**/!(style)*.css"],
    { events: "all" },
    async () => livereload.reload()
  );
});
