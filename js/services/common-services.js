(function () {
    'use strict';

    angular
        .module('app')
        .factory('CommonService', CommonService);

    CommonService.$inject = ['$http'];
    function CommonService($http) {
        var service = {};

        service.GetSpaDetails = GetSpaDetails;
        // service.GetById = GetById;
        // service.GetByUsername = GetByUsername;
        // service.Create = Create;
        // service.Update = Update;
        // service.Delete = Delete;

        return service;

        function GetSpaDetails() {
            //return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
            var spaData = [
                {
                "goldencategname": "GD1",
                "goldensubcategname": "GDSUB1",
                "goldenname": "GDN",
                "remarks": "aaa",
                "status": null,
                "megabu": "MB1",
                "id" : 1
                },
                {
                "goldencategname": "GD2",
                "goldensubcategname": "GDSUB2",
                "goldenname": "GDN",
                "remarks": "",
                "status": null,
                "megabu": "MB2",
                "id" : 2
                },
                {
                "goldencategname": "GD3",
                "goldensubcategname": "GDSUB3",
                "goldenname": "GDN",
                "remarks": "",
                "status": null,
                "megabu": "MB3",
                "id" : 3
                },
                {
                "goldencategname": "GD4",
                "goldensubcategname": "GDSUB4",
                "goldenname": "GDN",
                "remarks": "",
                "status": null,
                "megabu": "MB4",
                "id" : 4
                }
        ];

            return spaData;
        }

        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();