import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Debuging errors
import notify from "gulp-notify"; // Notifications
import browserSync from "browser-sync"; // Local server
import newer from 'gulp-newer'; // Checking update
import ifPlugin from 'gulp-if';

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin,
} 