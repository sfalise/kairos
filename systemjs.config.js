(function (global) {

    var pathMappings = {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'angular2-tree-component': 'node_modules/angular2-tree-component',
        'lodash': 'node_modules/angular2-tree-component/node_modules/lodash',
    };

    var packages = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        'rxjs',
        'built',
        'angular2-tree-component',
        'lodash',
    ];

    var packagesConfig = {};

    packages.forEach(function(packageName) {
        if (packageName == 'angular2-tree-component') {
            packagesConfig[packageName] = {
                main: 'dist/angular2-tree-component.js',
                defaultExtension: 'js'
            };
        }
        else if (packageName == 'lodash') {
            packagesConfig[packageName] = {
                main: 'lodash.js',
                defaultExtension: 'js'
            };
        }
        else {
            packagesConfig[packageName] = {
                main: 'index.js',
                defaultExtension: 'js'
            };
        }
    });

    System.config({
        map: pathMappings,
        packages: packagesConfig,
    });

})(this);
