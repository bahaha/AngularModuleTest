define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_826',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 826');
    	$scope.test = TestService.getTest()
    }]);
});
