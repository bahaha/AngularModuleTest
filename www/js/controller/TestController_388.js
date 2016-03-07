define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_388',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 388');
    	$scope.test = TestService.getTest()
    }]);
});
