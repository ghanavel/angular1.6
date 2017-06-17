(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['$rootScope','$http' , 'UserService','Envconfig'];
    function MenuController($rootScope,$http,UserService,Envconfig) {
        var vm = this;
        
        vm.userDetails = UserService.GetUserDetails();
        var API_URL = Envconfig.get('host');
        vm.allUsers = [];
        //debugger;

       vm.name = "ss";
       vm.result = null;



    // $http
    // .get('http://date.jsontest.com/').then(function (res){
    //     vm.result = res.data;
    //     debugger;
    // },function (error){
    //     debugger;
    // });

        


        
    }

})();