define(['app', 'service/TestService'], function (app) {
    'use strict';
    app.register.controller('Controller_529',['$scope', '$state', 'TestService', function($scope, $state, TestService) {
    	console.log('this is controller 529');
    	$scope.test = TestService.getTest()
    }]);
});
