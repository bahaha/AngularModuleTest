define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_743',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 743');
    	$scope.test = TestService.getTest()
    }]);
});
