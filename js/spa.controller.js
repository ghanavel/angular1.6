(function () {
    'use strict';

    angular
        .module('app')
        .controller('SpaController', SpaController);

    SpaController.$inject = ['$rootScope','$http','UserService','CommonService','Envconfig'];
    function SpaController($rootScope,$http,UserService,CommonService,Envconfig) {
        var vm = this;
        var API_URL = Envconfig.get('host');

        vm.user = null;
        vm.allUsers = [];
        

       vm.name = "ss";
       vm.result = null;
       vm.userDetails = UserService.GetUserDetails();
       vm.isEditable = false;
       vm.isSelectAll = false;
       vm.selectedData = [];
       vm.isSubmitted = false;

       vm.edit = function(){
        vm.isEditable  = !vm.isEditable;
       };


       vm.checkboxChange = function(value){
            value = !value;
       };

       vm.doSelectAll = function () {
            //debugger;
           vm.isSelectAll = !vm.isSelectAll;          
             angular.forEach(vm.spaData, function(value, key){
                    //console.log(value);
                    value['checkResult'] = vm.isSelectAll;
                    vm.spaData[key] = value;
                     console.log(value);
            });

          
       };

       vm.reset = function(){
        vm.isEditable = false;
        vm.isSelectAll = false;
        vm.selectedData = [];
        vm.spaData = CommonService.GetSpaDetails();
       };

       vm.checkboxChange = function(value){
            value = !value;
       };

       vm.insert = function(){
        var newObj = {
            "goldencategname": "",
            "goldensubcategname": "",
            "goldenname": "",
            "remarks": "",
            "status": null,
            "megabu": "",
            "checkResult": true,
            "id" : null
        };
        
        vm.spaData.push(newObj);

       }

        //debugger;
        
      vm.spaData = CommonService.GetSpaDetails();

      vm.submit = function(data){
        vm.isSubmitted = true;
        var onlySelectData = [];
        var onlySelectData = data.filter(function(item){
            return !!item['checkResult'] 
                    && !!item['goldencategname']
                    && !!item['goldensubcategname']
                    && !!item['megabu']
                    && !!item['goldenname'];
        })
        if(onlySelectData.length > 0){
            vm.selectedData = onlySelectData;

            // $http({
            // url: API_URL+'copyleng/bkvalue',
            // method: "POST",
            // data: { 'payload' : vm.selectedData }
            // })
            // .then(function(response) {
            // // success
            // }, 
            // function(response) { // optional
            // // failed
            // });
        }else{
            vm.selectedData = [];
        }
        

      }
 


    $http.
        get(API_URL+'copyleng/bkvalue').then(function (res){
           // debugger;
        //vm.spaData = res.data;
    },function (error){
        //debugger;
    });

        


        
    }

})();