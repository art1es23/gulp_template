import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; // Compressing CSS-files
import webpcss from "gulp-webpcss"; // Output Webp images
import autoprefixer from "gulp-autoprefixer"; // Adding vendor prefixes
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Grouping media-queries

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: `Error: <%= error.message %>`,
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../assets/img/'))
        .pipe(sass({
            outputStyle: 'expanded',
        }))

        .pipe(
            app.plugins.if(
                app.isBuild, groupCssMediaQueries()))
        .pipe(
            app.plugins.if(
                app.isBuild, webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp",
                })))
        .pipe(
            app.plugins.if(
                app.isBuild, autoprefixer({
                    grid: true,
                    overrideBrowserList: ["last 3 versions"],
                    cascade: true,
                })))

        // If you need not-compressed CSS-file 
        // .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild, cleanCss()))
        .pipe(
            app.plugins.if(
                app.isBuild, rename({
                    extname: ".min.css",
                })))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}