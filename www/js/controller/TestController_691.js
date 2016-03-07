define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_691',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 691');
    	$scope.test = TestService.getTest()
    }]);
});
