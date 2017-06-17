(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config);
        

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/spa-missing-category-lookup', {
                controller: 'SpaController',
                templateUrl: 'template/spa-missing-category-lookup.html',
                controllerAs: 'vm'
            })

            .when('/ga-master-list', {
                controller: 'GaController',
                templateUrl: 'template/ga-master-list.html',
                controllerAs: 'vm'
            })

            .when('/copy-length', {
                controller: 'CopyLengthController',
                templateUrl: 'template/copy-length.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/spa-missing-category-lookup' });
    }

    
   

})();