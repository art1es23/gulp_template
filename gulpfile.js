import gulp from 'gulp';
// Importing PATHs
import { path } from './gulp/config/path.js';
// Importing general plugins
import { plugins } from './gulp/config/plugins.js';

// Provide vars to global var
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Impoting tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';

import { server } from './gulp/tasks/server.js';
import { otfToTft, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprites } from './gulp/tasks/svgSprites.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';

// Watcher for changing in the folders
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); // html -> gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss); // scss -> gulp.series(scss, ftp)
    gulp.watch(path.watch.js, js); // js -> gulp.series(js, ftp)
    gulp.watch(path.watch.images, images);
}

// Sequential execution of font tasks
const fonts = gulp.series(otfToTft, ttfToWoff, fontsStyle);

// Main tasks
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Script building executing tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Export scenarious
export { svgSprites };
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// Executing the default scenario
gulp.task('default', dev)