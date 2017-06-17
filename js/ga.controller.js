(function () {
    'use strict';

    angular
        .module('app')
        .controller('GaController', GaController);

    GaController.$inject = ['$rootScope'];
    function GaController($rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        

       vm.name = "ss";

        
    }

})();