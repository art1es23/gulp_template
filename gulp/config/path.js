// Get name of root folder
import * as nodePath from 'path';
const ROOT_FOLDER = nodePath.basename(nodePath.resolve());

const BUILD_FOLDER = './dist'; // Destination folder
const SRC_FOLDER = './src'; // Source folder

export const path = {
    build: {
        files: `${BUILD_FOLDER}/files/`,
        html: `${BUILD_FOLDER}/`,
        css: `${BUILD_FOLDER}/css/`,
        js: `${BUILD_FOLDER}/js/`,
        images: `${BUILD_FOLDER}/assets/img/`,
        fonts: `${BUILD_FOLDER}/assets/fonts/`,
    },
    src: {
        files: `${SRC_FOLDER}/files/**/*.*`,
        html: `${SRC_FOLDER}/*.pug`,
        scss: `${SRC_FOLDER}/scss/main.scss`,
        js: `${SRC_FOLDER}/js/main.js`,
        images: `${SRC_FOLDER}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${SRC_FOLDER}/assets/img/svg/**/*.svg`,
        svgicons: `${SRC_FOLDER}/assets/svgicons/*.svg`,
    },
    watch: {
        files: `${SRC_FOLDER}/files/**/*.*`,
        html: `${SRC_FOLDER}/**/*.pug`,
        scss: `${SRC_FOLDER}/scss/**/*.scss`,
        js: `${SRC_FOLDER}/js/**/*.js`,
        images: `${SRC_FOLDER}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean: BUILD_FOLDER,
    buildFolder: BUILD_FOLDER,
    srcFolder: SRC_FOLDER,
    rootFolder: ROOT_FOLDER,
    ftp: `test`,
}