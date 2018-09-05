(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'src',
            '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'node_modules/@angular/animations/bundles/animations-browser.umd.js',
            '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',   
            '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/common/http': 'node_modules/@angular/common/bundles/common-http.umd.js',
            '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
            '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
            'reflect-metadata': 'node_modules/reflect-metadata/Reflect.js',
            'rxjs': 'node_modules/rxjs',
            'tslib': 'node_modules/tslib/tslib.js'
        },
        packages: {
            "app": { main: './index.js', defaultExtension: 'js' },
            "rxjs": { defaultExtension: 'js' },
            "reflect-metadata": { defaultExtension: 'js' }
        }
    });
})(this);